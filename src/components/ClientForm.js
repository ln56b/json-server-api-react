import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function ClientForm({ handleChange, handleSubmit }) {
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Row>
					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="genre">
							<Form.Label>Genre</Form.Label>
							<Form.Control as="select" name="genre" onChange={handleChange}>
								<option>Madame</option>
								<option>Monsieur</option>
							</Form.Control>
						</Form.Group>
					</Col>

					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="prenom" required>
							<Form.Label>Prénom</Form.Label>
							<Form.Control type="text" name="prenom" onChange={handleChange} />
						</Form.Group>
					</Col>

					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="nom" required>
							<Form.Label>Nom</Form.Label>
							<Form.Control type="text" name="nom" onChange={handleChange} />
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Row>
					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="email" required>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Entrez un email"
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>

					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="Mot de passe"
								onChange={handleChange}
							/>
						</Form.Group>
					</Col>
				</Form.Row>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

ClientForm.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default ClientForm;

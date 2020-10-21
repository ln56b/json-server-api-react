import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function ClientForm({ client, handleChange, handleSubmit }) {
	return (
		<div className="form">
			<h2>Ajouter / Modifier un client</h2>
			<Form onSubmit={handleSubmit} noValidate>
				<Form.Row>
					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="genre">
							<Form.Label>Genre</Form.Label>
							<Form.Control
								as="select"
								name="genre"
								value={client.genre}
								onChange={handleChange}
							>
								<option>Madame</option>
								<option>Monsieur</option>
							</Form.Control>
						</Form.Group>
					</Col>

					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="prenom">
							<Form.Label>Prénom</Form.Label>
							<Form.Control
								type="text"
								name="prenom"
								value={client.prenom}
								onChange={handleChange}
								required
							/>
						</Form.Group>
					</Col>

					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="nom">
							<Form.Label>Nom</Form.Label>
							<Form.Control
								type="text"
								name="nom"
								value={client.nom}
								onChange={handleChange}
								required
							/>
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Row>
					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={client.email}
								placeholder="Entrez un email"
								onChange={handleChange}
								required
							/>
						</Form.Group>
					</Col>

					<Col xs={12} sm={6} lg={4}>
						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={client.password}
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
	client: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default ClientForm;

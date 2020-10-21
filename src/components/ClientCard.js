import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ClientCard({ client, getClientById, deleteClient }) {
	let { id } = useParams();

	useEffect(() => {
		getClientById(id);
	}, []);

	return (
		<div className="client-card">
			<h2>
				Fiche détaillée de {client.prenom} {client.nom}
			</h2>
			<Card style={{ textAlign: 'center', width: '20rem', margin: '1rem' }}>
				<Card.Header>{client.genre}</Card.Header>
				<Card.Body>
					<Card.Title>
						{client.prenom} {client.nom}
					</Card.Title>
					<Card.Text>{client.email}</Card.Text>
					<Link to="/form">
						<Button variant="primary" style={{ margin: '1rem' }}>
							Update
						</Button>
					</Link>
					<Button
						variant="danger"
						onClick={() => deleteClient(client.id)}
						style={{ margin: '1rem' }}
					>
						Delete
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

ClientCard.propTypes = {
	client: PropTypes.object.isRequired,
	getClientById: PropTypes.func.isRequired,
	deleteClient: PropTypes.func.isRequired,
};

export default ClientCard;

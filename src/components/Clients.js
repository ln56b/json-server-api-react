import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Clients({ clients, getClients }) {
	useEffect(() => {
		getClients();
	}, []);

	return (
		<div className="clients">
			{clients &&
				clients.map((client) => (
					<Card
						key={client.id}
						style={{ textAlign: 'center', width: '18rem', margin: '1rem' }}
					>
						<Card.Header>{client.genre}</Card.Header>
						<Card.Body>
							<Card.Title>
								{client.prenom} {client.nom}
							</Card.Title>
							<Card.Text>{client.email}</Card.Text>
							<Button
								variant="warning"
								// onClick={updateClient}
								style={{ margin: '1rem' }}
							>
								Update
							</Button>
							<Button
								variant="danger"
								// onClick={deleteClient}
								style={{ margin: '1rem' }}
							>
								Delete
							</Button>
						</Card.Body>
					</Card>
				))}
		</div>
	);
}

Clients.propTypes = {
	clients: PropTypes.array.isRequired,
	getClients: PropTypes.func.isRequired,
};

export default Clients;

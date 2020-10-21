import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Dashboard() {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		getClients();
	}, []);

	const getClients = () => {
		fetch('http://localhost:5000/clients')
			.then((response) => response.json())
			.then((json) => {
				setClients(json);
			})
			.then(console.log(clients));
	};

	return (
		<div>
			{clients &&
				clients.map((client) => (
					<Card key={client.id}>
						<Card.Header>{client.genre}</Card.Header>
						<Card.Body>
							<Card.Title>
								{client.prenom} {client.nom}
							</Card.Title>
							<Card.Text>{client.email}</Card.Text>
							<Button variant="primary">Update</Button>
							<Button variant="danger">Delete</Button>
						</Card.Body>
					</Card>
				))}
		</div>
	);
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Dashboard() {
	const [client, setClient] = useState({});
	const [clients, setClients] = useState([]);
	const [newClient, setNewClient] = useState({});

	useEffect(() => {
		getClients();
	}, []);

	const getClients = () => {
		axios
			.get('http://localhost:5000/clients')
			.then((res) => res.data)
			.then((data) => {
				setClients(data);
			});
	};

	const createClient = () => {
		const client = {
			id: 52,
			prenom: 'Hélène',
			nom: 'Test',
			email: 'helenetest@gmail.com',
			genre: 'Madame',
		};

		axios
			.post('http://localhost:5000/clients', client)
			.then((res) => res.data)
			.then((res) => console.log(res))
			.then((res) => setNewClient(res));
	};

	const updateClient = () => {};

	const deleteClient = (id) => {
		axios.delete(`http://localhost:5000/clients/${id}`);
	};

	return (
		<div>
			<Button variant="primary" onClick={createClient}>
				Add a new client
			</Button>
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
									onClick={updateClient}
									style={{ margin: '1rem' }}
								>
									Update
								</Button>
								<Button
									variant="danger"
									onClick={deleteClient}
									style={{ margin: '1rem' }}
								>
									Delete
								</Button>
							</Card.Body>
						</Card>
					))}
			</div>
		</div>
	);
}

export default Dashboard;

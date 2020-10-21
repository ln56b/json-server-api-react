import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import ClientForm from './ClientForm';
import Clients from './Clients';

import Button from 'react-bootstrap/Button';

function Dashboard() {
	// State
	const initialClientState = {
		id: null,
		genre: '',
		prenom: '',
		nom: '',
		email: '',
	};
	const [client, setClient] = useState(initialClientState);
	const [clients, setClients] = useState([]);

	// CRUD methods
	const getClients = () => {
		axios
			.get('http://localhost:5000/clients')
			.then((res) => res.data)
			.then((data) => {
				setClients(data);
			});
	};

	const createClient = () => {
		axios
			.post('http://localhost:5000/clients', client)
			.then((res) => res.data)
			.then((res) => setClient(initialClientState))
			.then(() => getClients());
	};

	//TODO
	const updateClient = () => {
		const id = 53;
		axios
			.put(`http://localhost:5000/clients/${id}`, client)
			.then((res) => res.data)
			.then((res) => setClient(initialClientState))
			.then(() => getClients());
	};

	const deleteClient = () => {
		//TODO useParams get ID
		const id = 52;
		axios
			.delete(`http://localhost:5000/clients/${id}`)
			.then(() => getClients());
	};

	// Form methods
	const handleChange = (event) => {
		const { name, value } = event.target;
		setClient({ ...client, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!client.id) {
			createClient();
		}
		updateClient();
	};

	return (
		<div>
			<Route exact path="/">
				<Link to={'clients/form/'}>
					<Button variant="primary" type="submit">
						Add a client
					</Button>
				</Link>
				<Clients clients={clients} getClients={getClients} />
			</Route>
			<Route path="/clients/form">
				<ClientForm
					client={client}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Route>
			<Route exact path="/clients">
				<Clients clients={clients} getClients={getClients} />
			</Route>
		</div>
	);
}

export default Dashboard;

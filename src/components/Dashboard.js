import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import ClientForm from './ClientForm';
import Clients from './Clients';

import Button from 'react-bootstrap/Button';
import ClientCard from './ClientCard';

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

	// Router history
	const history = useHistory();

	// CRUD methods
	const getClients = () => {
		axios
			.get('http://localhost:5000/clients')
			.then((res) => res.data)
			.then((data) => {
				setClients(data);
			});
	};

	const getClientById = (id) => {
		axios
			.get(`http://localhost:5000/clients/${id}`)
			.then((res) => res.data)
			.then((data) => {
				setClient(data);
			});
	};

	const createClient = () => {
		axios
			.post('http://localhost:5000/clients', client)
			.then((res) => res.data)
			.then((res) => setClient(initialClientState))
			.then(() => {
				history.push('/');
				getClients();
			});
	};

	//TODO
	const updateClient = (client) => {
		axios
			.put(`http://localhost:5000/clients/${client.id}`, client)
			.then((res) => res.data)
			.then(() => setClient(initialClientState))
			.then(() => {
				history.push('/');
				getClients();
			});
	};

	const deleteClient = (id) => {
		axios.delete(`http://localhost:5000/clients/${id}`).then(() => {
			history.push('/');
			getClients();
		});
	};

	// Form methods
	const handleChange = (event) => {
		const { name, value } = event.target;
		setClient({ ...client, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		!client.id ? createClient() : updateClient(client);
	};

	return (
		<div className="dashboard">
			<Route exact path="/">
				<h1>Dashboard</h1>
				<Link to={'/form'}>
					<Button variant="primary" type="submit" style={{ margin: '1rem' }}>
						Add a client
					</Button>
				</Link>
				<Clients
					clients={clients}
					getClients={getClients}
					deleteClient={deleteClient}
				/>
			</Route>
			<Route path="/form">
				<ClientForm
					client={client}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Route>
			<Route path="/clients/:id">
				<ClientCard
					client={client}
					getClientById={getClientById}
					updateClient={updateClient}
					deleteClient={deleteClient}
				></ClientCard>
			</Route>
		</div>
	);
}

export default Dashboard;

import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.darkly.min.css';
// import './styles/bootstrap.morph.min.css';
// import './styles/bootstrap.quartz.min.css';
import { Container, Button, Card } from 'react-bootstrap';
import { Employees } from './components/Employees';
import { Customers } from './components/Customers';
import { FaSpinner } from 'react-icons/fa';
import './styles/App.css';

const employeesUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

const customersUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json'; 

function App() {
	const [mode, setMode] = useState('employees');
	const [employees, setEmployees] = useState([]);
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(employeesUrl);
			const _employees = await response.json();
			setEmployees(_employees);
		})();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				const response = await fetch(customersUrl);
				const _customers = await response.json();
				setCustomers(_customers);
			})();
		}, 3000);
	}, []);

	return (
		<div>
			<Container className="pt-5">
				<h1>Company Site</h1>
				<p>There are {employees.length} employees.</p>
				<Button onClick={() => setMode('employees')} className="me-2">
					Employees
				</Button>
				<Button
					onClick={() => setMode('customers')}
					className="btn-success"
					disabled={customers.length === 0}
				>
				{customers.length === 0 ? <FaSpinner className="spinner"/> : 'Customers'}
				</Button>
				<Card className="mt-2">
					<Card.Body>
						{mode === 'employees' ? (
							<Employees employees={employees} />
						) : (
							<Customers customers={customers} />
						)}
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default App;

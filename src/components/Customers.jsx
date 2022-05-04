import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const pageSize = 10;

export const Customers = ({ customers }) => {
	const [begin, setBegin] = useState(0);
	const [end, setEnd] = useState(10);

	const handlePageBack = () => {
		let _begin = begin - pageSize;
		let _end = end - pageSize;
		if (_begin < 0) {
			_begin = customers.length - pageSize;
			_end = customers.length;
		}
		setBegin(_begin);
		setEnd(_end);
	};

	const handlePageForward = () => {
		let _begin = begin + pageSize;
		let _end = _begin + (pageSize);
		if (_end > customers.length) {
			_end = customers.length;
		}
		if (_begin > customers.length) {
			_begin = 0;
			_end = 10;
		}
		setBegin(_begin);
		setEnd(_end);
	};

	return (
		<>
			<h2>Customers</h2>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Company</th>
					</tr>
				</thead>
				<tbody>
					{customers.slice(begin, end).map((cust, index) => {
						return (
							<tr key={index}>
								<td>{cust.customerID}</td>
								<td>{cust.contactName.split(' ')[0]}</td>
								<td>{cust.contactName.split(' ')[1]}</td>
								<td>{cust.companyName}</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<Button onClick={handlePageBack} className="mt-2">
						{'<<'}
					</Button>
					<Button onClick={handlePageForward} className="mt-2 ms-2">
						{'>>'}
					</Button>
				</tfoot>
			</Table>
		</>
	);
};

import { Carousel } from 'react-bootstrap';

export const Employees = ({ employees }) => {
	return (
		<>
			<h2>Employees</h2>
			<p>This is the employees page.</p>

			<Carousel style={{ width: '400px' }}>
				{employees.map((emp, index) => {
					return (
						<Carousel.Item key={index}>
							<img
								className="d-block w-100"
								src={`images/employees/employee_${emp.employeeID}.jpg`}
							/>
							<Carousel.Caption>
								<h3>{emp.firstName} {emp.lastName}</h3>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</>
	);
};

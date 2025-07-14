import React, { useState } from "react";
import {
	Container,
	Row,
	Col,
	Form as BootstrapForm,
	Button,
	Card,
	Alert,
} from "react-bootstrap";

const Contact = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		text: "",
	});

	const [validated, setValidated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState("success");
	const [alertMessage, setAlertMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.stopPropagation();
			setValidated(true);
			return;
		}

		setValidated(true);

		try {
			setAlertType("success");
			setAlertMessage("Formulaire envoyé avec succès!");
			setShowAlert(true);

			setFormData({
				username: "",
				email: "",
				text: "",
			});
			setValidated(false);

			if (response.data.token) {
				localStorage.setItem("authToken", response.data.token);
			}

			setTimeout(() => {
				setShowAlert(false);
			}, 5000);
		} catch (error) {
			setAlertType("danger");
			setAlertMessage("Une erreur est survenue. Veuillez réessayer.");
			setShowAlert(true);

			setTimeout(() => {
				setShowAlert(false);
			}, 5000);
		}
	};

	return (
		<Container className="py-5">
			<Row className="justify-content-center">
				<Col md={10} lg={8}>
					<Card className="shadow-lg border-0">
						<Card.Header className="text-white py-3" style={{backgroundColor: '#ffcb05'}}>
							<h2 className="h4 mb-0 text-center" style={{color: 'black', backgroundColor: '#ffcb05'}}>Contact</h2>
						</Card.Header>
						<Card.Body className="p-4">
							{showAlert && (
								<Alert
									variant={alertType}
									onClose={() => setShowAlert(false)}
									dismissible
								>
									{alertMessage}
								</Alert>
							)}

							<BootstrapForm
								noValidate
								validated={validated}
								onSubmit={handleSubmit}
							>
								<BootstrapForm.Group className="mb-3" controlId="username">
									<BootstrapForm.Label>Name & Surname</BootstrapForm.Label>
									<BootstrapForm.Control
										type="text"
										name="username"
										value={formData.username}
										onChange={handleChange}
										required
									/>
									<BootstrapForm.Control.Feedback type="invalid">
										Please enter your name
									</BootstrapForm.Control.Feedback>
								</BootstrapForm.Group>

								<BootstrapForm.Group className="mb-3" controlId="email">
									<BootstrapForm.Label>Email</BootstrapForm.Label>
									<BootstrapForm.Control
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
									<BootstrapForm.Control.Feedback type="invalid">
										Please enter your e-mail address
									</BootstrapForm.Control.Feedback>
								</BootstrapForm.Group>

								<BootstrapForm.Group className="mb-4" controlId="text">
									<BootstrapForm.Label>Message</BootstrapForm.Label>
									<BootstrapForm.Control
										type="text"
										name="text"
										value={formData.text}
										onChange={handleChange}
										required
									/>
									<BootstrapForm.Control.Feedback type="invalid">
										Please enter a message
									</BootstrapForm.Control.Feedback>
								</BootstrapForm.Group>

								<div className="d-grid gap-2">
									<Button style={{color: '#000000', backgroundColor: "#ffcb05", border: "none"}} type="submit" size="lg">
										Contact Jane
									</Button>
								</div>
							</BootstrapForm>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;

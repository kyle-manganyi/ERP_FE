import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png';
import '../SCSS/register_user_style.scss';
export class registerUser extends Component {
	render() {
		return (
			<Container className="register-user-main-container pl-sm-5">
				<Row className="first-row-container">
					<div className="first-row-new-user-label d-flex justify-content-start">
						<label>New user</label>
					</div>
					<div>
						This form allows you to create an internal user in your company/organization. To create an
						external user (customer, vendor etc. ..), use the button 'Create Dolibarr User' from that
						third-party's contact card.
					</div>
				</Row>
				<hr />
				<Row className="second-row-container">
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start font-weight-bold">
							Last name
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<input type="text" className="last-name-text-box" />
						</Col>
					</Row>
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start">
							First name
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<input type="text" className="last-name-text-box" />
						</Col>
					</Row>
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start font-weight-bold">
							Login
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<input type="text" className="last-name-text-box" />
						</Col>
					</Row>
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start font-weight-bold">
							Password
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<input type="text" className="last-name-text-box" />
						</Col>
					</Row>
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start">
							Key for API
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<input type="text" className="last-name-text-box" />
						</Col>
					</Row>
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start">
							Type
						</Col>
						<Col xs={7} className="d-flex justify-content-start">Internal</Col>
					</Row>
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start">
							Gender
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<select className="gender-dropdown">
								<option />
								<option value="Man">Man</option>
								<option value="Woman">Woman</option>
							</select>
						</Col>
					</Row>
					<Row className="w-100 mb-sm-3">
						<Col xs={5} className="d-flex justify-content-start">
							Employee
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<select className="gender-dropdown">
								<option value="Yes">Yes</option>
								<option value="No">NO</option>
							</select>
						</Col>
					</Row>
					<Row className="w-100 mb-sm-2">
						<Col xs={5} className="d-flex justify-content-start">
							Supervisor
						</Col>
						<Col xs={7} className="d-flex justify-content-start">
							<select className="gender-dropdown">
                                <option></option>
								<option value="fulldemo">fulldemo</option>
								<option value="administrator LMKC">administrator LMKC</option>
								<option value="Demo demo">Demo demo</option>
								<option value="Mamadou Diop">Mamadou Diop</option>
								<option value="Mody diop">Mody diop</option>
								<option value="Takunda SHANJI">Takunda SHANJI</option>
								<option value="user1 user1">user1 user1</option>
								<option value="user2 user2">user2 user2</option>
							</select>
						</Col>
					</Row>
				</Row>
                <hr />
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(registerUser);

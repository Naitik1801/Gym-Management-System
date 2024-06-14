import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddressModal from './AddressModal';
import'./Form.css' 

function Form() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [aadharcard, setAadharCard] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [emergencymobile, setEmergencyMobile] = useState('');
    const [emergencyrelation, setEmergencyRelation] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [joindate, setJoinDate] = useState('');
    const [bloodgroup, setBloodGroup] = useState('');

    const documentOptions = [
        { value: 'aadhar', label: 'Aadhar Card' },
        { value: 'driving', label: 'Driving License' },
        { value: 'passport', label: 'Passport' }
    ]

    const bloodGroupOptions = [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' }
    ]

    const emergencyRelationOptions = [
        { value: 'mother', label: 'Mother' },
        { value: 'father', label: 'Father' },
        { value: 'son', label: 'Son' },
        { value: 'daughter', label: 'Daughter' },
        { value: 'brother', label: 'Brother' },
        { value: 'sister', label: 'Sister' },
        { value: 'uncle', label: 'Uncle' },
        { value: 'aunty', label: 'Aunty' },
        { value: 'wife', label: 'Wife' },
        { value: 'husband', label: 'Husband' },
        { value: 'grandfather', label: 'Grandfather' },
        { value: 'grandmother', label: 'Grandmother' },
        { value: 'grandchild', label: 'Grandchild' },
        { value: 'neighbour', label: 'Neighbour' },
        { value: 'friend', label: 'Friend' }
    ];

    return (
        <div className='container-fluid' >
            <div className="container">

                <div className="d-flex mb-3 align-items-center justify-content-between">
                    <div className="me-auto">
                        <h1 className="ml-3">Member</h1>
                    </div>
                    <button className="btn btn-secondary" disabled>Disabled</button>
                    <button className="btn btn-primary ms-2" onClick={() => console.log(firstname, lastname, aadharcard, mobilenumber, emergencymobile, emergencyrelation, email, birthdate, joindate, bloodgroup, gender, address)}>Submit</button>
                </div>

                <hr />

                <div className="d-flex mb-3 align-items-center justify-content-between">
                    <div id="upload" className="me-auto position-relative">
                        <img src="https://gymxfit.gymxfit.com/assets/images/profile.svg" alt="Profile" className="image" height="150px" />
                        <button type="button" className="btn btn-primary d-inline-flex align-items-center position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded" style={{padding: "5px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <h5>Notification Setting</h5>
                        <div className="form-check form-switch mb-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="emailNotifications" />
                            <label className="form-check-label" htmlFor="emailNotifications">Email Notifications</label>
                        </div>
                        <div className="form-check form-switch mb-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="mobileNotifications" />
                            <label className="form-check-label" htmlFor="mobileNotifications">Mobile Notifications</label>
                        </div>
                        <div className="form-check form-switch mb-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="pushNotifications" />
                            <label className="form-check-label" htmlFor="pushNotifications">Push Notifications</label>
                        </div>
                    </div>
                </div>

                <hr />

            </div>

            <form className="container mb-5">

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="aadhaarNumber">Aadhaar Card Number</label>
                        <input type="text" className="form-control" id="aadhaarNumber" placeholder="Enter Aadhaar Card Number" value={aadharcard} onChange={(e) => setAadharCard(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input type="text" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" value={mobilenumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="emergencyMobile">Emergency Mobile</label>
                        <input type="text" className="form-control" id="emergencyMobile" placeholder="Enter Emergency Mobile" value={emergencymobile} onChange={(e) => setEmergencyMobile(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="emergencyRelation">Emergency Relation</label>
                        <Select
                            id="emergencyRelation"
                            options={emergencyRelationOptions}
                            placeholder="Select Emergency Relation"
                            onChange={setEmergencyRelation}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="date" className="form-control" id="birthdate" value={birthdate} onChange={(e) => setBirthDate(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="joiningDate">Joining Date</label>
                        <input type="date" className="form-control" id="joiningDate" value={joindate} onChange={(e) => setJoinDate(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="bloodGroup">Blood Group</label>
                        <Select
                            id="bloodgroup-select"
                            placeholder="Select blood type"
                            options={bloodGroupOptions}
                            onChange={setBloodGroup}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="gender">Gender</label>
                        <div className="mt-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" onClick={() => setGender('Male')} />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="female" value="female" onClick={() => setGender('Female')} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="other" value="other" onClick={() => setGender('Other')} />
                                <label className="form-check-label" htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-4 mb-2">
                        <label htmlFor="address">Address</label>
                        {address ?
                            <div>
                                {JSON.parse(address).flat + ", " + JSON.parse(address).area + ", " + JSON.parse(address).city.label + ", " + JSON.parse(address).state.label + " - " + JSON.parse(address).pin}
                                <br />
                                <button type="button" className="btn btn-primary btn-block" data-bs-toggle="modal" data-bs-target="#addressModal">Edit Address</button>
                            </div> :
                            <div>
                                <button type="button" className="btn btn-primary btn-block" data-bs-toggle="modal" data-bs-target="#addressModal">Set Address</button>
                            </div>}
                    </div>
                    <AddressModal
                        setAddress={setAddress}
                        address={address}
                    />
                </div>

                <hr />

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3"></textarea>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="documents">Documents</label>
                        <Select
                            id="document-select"
                            placeholder="Select document type"
                            options={documentOptions}
                        />
                    </div>
                </div>

            </form>

        </div>
    );
}

export default Form;

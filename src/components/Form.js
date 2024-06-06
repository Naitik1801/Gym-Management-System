import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MemberHeader from './MemberHeader';
import AddressModal from './AddressModal';

function Form() {

    const [address, setAddress] = useState('');

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
        <div>

            <MemberHeader />

            <form className="container mb-5">

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" required />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="aadhaarNumber">Aadhaar Card Number</label>
                        <input type="text" className="form-control" id="aadhaarNumber" placeholder="Enter Aadhaar Card Number" />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input type="text" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="emergencyMobile">Emergency Mobile</label>
                        <input type="text" className="form-control" id="emergencyMobile" placeholder="Enter Emergency Mobile" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="emergencyRelation">Emergency Relation</label>
                        <Select
                            id="emergencyRelation"
                            options={emergencyRelationOptions}
                            placeholder="Select Emergency Relation"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="date" className="form-control" id="birthdate" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="joiningDate">Joining Date</label>
                        <input type="date" className="form-control" id="joiningDate" />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="bloodGroup">Blood Group</label>
                        <Select
                            id="bloodgroup-select"
                            placeholder="Select blood type"
                            options={bloodGroupOptions}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="gender">Gender</label>
                        <div className="mt-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
                                <label className="form-check-label" htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-4 mb-2">
                        <label htmlFor="address">Address</label>
                        {address ?
                            <div>
                                {address}
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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemberHeader() {
    return (
        <div className="container mt-4">

            <div className="d-flex mb-3 align-items-center justify-content-between">
                <div className="me-auto">
                    <h1 className="ml-3">Member</h1>
                </div>
                <button className="btn btn-secondary" disabled>Disabled</button>
                <button className="btn btn-primary ms-2" onClick={() => alert('Hi')}>Submit</button>
            </div>

            <hr />

            <div className="d-flex mb-3 align-items-center justify-content-between">
                <div className="me-auto">
                    <img src="https://gymxfit.gymxfit.com/assets/images/profile.svg" alt="Profile" className="image" height="150px" />
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
    );
}

export default MemberHeader;

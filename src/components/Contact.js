import React from 'react';

export const Contact = () => (
    <div className="container">
        <h1 className="brand">Road to Decode</h1>
        <div className="wrapper animated bounceInLeft">
            <div className="company-info">
                <h3>Georgia Stamos</h3>
                <ul>
                    <li><i className="fa fa-road"></i> 44 Something st</li>
                    <li><i className="fa fa-phone"></i> (555) 555-5555</li>
                    <li><i className="fa fa-envelope"></i> test@acme.test</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact Me</h3>
                <form netlify>
                    <p>
                        <label>Name</label>
                        <input type="text" name="name"/>
                    </p>
                    <p>
                        <label>Email Address</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="text" name="phone"/>
                    </p>
                    <p className="full">
                        <label>Message</label>
                        <textarea name="message" rows="5"></textarea>
                    </p>
                    <p className="full">
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
);
import React from 'react';

export const Contact = () => (
    <div className="container">
        <div className="wrapper">
            <div className="company-info">
                <h3>Georgia Stamos</h3>
                <ul>
                    <li><i className="fa fa-phone"></i> (917) 936-6408</li>
                    <li><i className="fa fa-envelope"></i> georgia@roadtodecode.com</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact Me</h3>
                <form name="contact" method="post" netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
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
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        </div>
            <div className="orton-logo">
                <img src="orton-logo.jpeg" alt="orton gillingham logo" />
            </div>
    </div>
);
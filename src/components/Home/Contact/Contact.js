import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section style={{ background: ' #FBD062' }} className=" ">
            <div className="container py-5">
                <div className="row ">
                    <div className="col-md-6 px-5 mb-5">
                        <h1>Let us handle your <br /> project professionally  </h1>
                        <br/>
                        <small style={{ color: 'rgba(0, 0, 0, 0.7)'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nisi voluptas obcaecati quod commodi inventore non similique labore. Vero, aut.</small>
                    </div>
                    <div className="col-md-6 mb-5">
                        <form action="">
                            <input type="email" name="" className="form-control" placeholder="Your Email Address" id="" />
                            <input type="text" name="" className="form-control my-4" placeholder="Your Name/Company's Name" id="" />
                            <textarea id="message" className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                            <button className="btn btn-primary btn-brand px-5">Send</button>
                        </form>
                    </div>
                </div>

                <div className="footer text-center mt-5 ">
                    <small>copyright Orange labs 2020</small>
                </div>
            </div>
        </section>
    );
};

export default Contact;
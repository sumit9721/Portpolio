import React from 'react'


const Contact = () => {
    return (
        <>
            <section className="contact adjust" id="contact">
                <div className="title">
                    <h2>Contact Us</h2>
                </div>
                <div className="contactForm">
                    <div className="row1">
                        <img alt="phone" src={Phone} />
                        <div className="info">
                            <h6>CONTACT NUMBER</h6>
                            <span>9721964283</span>
                        </div>
                    </div>
                    <div className="row1">
                    <img alt="email" src={Email} />
                    <div className="info">
                            <h6>EMAIL ADDRESS</h6>
                            <span><a href="Sumit.zestgeek@com">Sumit.zestgeek@com</a></span>
                        </div>
                    </div>
                    <div className="row1">
                    <img alt="placeholder" src={Placeholder} />
                    <div className="info">
                            <h6>ADDRESS</h6>
                            <span>Mohali, Punjab, India</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;

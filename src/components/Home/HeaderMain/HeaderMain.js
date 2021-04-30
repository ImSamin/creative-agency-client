import React from 'react';
import coverImage from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <>
            <main className=" py-3 " >
                <div className="container ">
                    <div className="row d-flex align-items-center">
                        <div className=" col-md-5 ">
                            <h1 style={{ height: '180px', fontFamily: 'Poppins', fontSize: '48px', fontWeight: 'bold' }}>Let's Grow Your <br /> Brand To The <br /> Next Level </h1>
                            <p className="text-dark mr-5" style={{ fontFamily: 'Poppins', lineHeight: '24px', }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit, eveniet sit placeat nostrum non lorem ipsum.</p>
                            <button className="btn btn-primary btn-brand px-5">
                                Hire Us
                            </button>
                        </div>
                        <div className="col-md-6 d-sm-none d-md-block d-xs-none">
                            <img style={{ height: '400px' }} src={coverImage} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </main>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 190 1440 130">
                    <path fill="#ffffff" fill-opacity="1" d="M0,320L1440,192L1440,320L0,320Z"></path>
                </svg>
            </div>
        </>
    );
};

export default HeaderMain;
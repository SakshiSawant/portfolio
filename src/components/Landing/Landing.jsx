import React from 'react';
import './Landing.css';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return(
        <div className="landing-container">
            <div data-aos="zoom-in" className="title_block">
                <h1 className="title">Sakshi Sawant</h1>
                <h1 className="subtitle">I'm a</h1>
                <h1 className="subtitle">
                    <Typewriter
                        options={{
                            strings: ['Student', 'Blogger','Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </div>
        </div>
    );
};

export default Landing;



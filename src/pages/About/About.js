import React from 'react';
import jabir from '../../images/jabir.jpg'

const About = () => {
    return (
        <div className="bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src={jabir} alt='' className="max-w-sm rounded-lg shadow-2xl" style={{ height: '70vh', width: '25vw' }} />
                <div className='p-6'>
                    <h1 className="text-3xl font-bold">Abdullah Al-Mamun (Sheikh Jabir)</h1>
                    <p className="py-6">abdullah15-11757@diu.edu.bd
                        <br />Daffodil International University
                        <br /> House-3,Road-4, Block-A
                        <br />Mirpur-2, Dhaka-1216
                    </p>
                    <button className="btn btn-primary"><a href='https://my-portfolio-e325c.web.app'>Portfolio</a></button>
                </div>
            </div>
        </div>
    );
};

export default About;
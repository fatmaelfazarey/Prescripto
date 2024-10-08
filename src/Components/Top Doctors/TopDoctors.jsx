import React, { useContext, useState } from 'react'
import './TopDoctors.css'
// import { doctors } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    return (

        <section className='p-top-bottom-100 topDoctors' >
            <h4 className='section-title'>Top Doctors to Book</ h4>
            <p className='section-subTitle '>Simply browse through our extensive list of trusted doctors.</p>
            <div className='  grid-5 p-child-rigt-left-20-w100'>
                {
                    doctors.slice(0, 10).map((item, i) => (
                        <div key={i} className='eachDoctor' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate(`/appointment/${item._id}`); }}>
                            <img src={item.image} alt='' />
                            <div className='doctorInfo'>
                                <div className='areAvailable'>
                                    <p className='circle'></p>
                                    <p>Available</p>
                                </div>
                                <p className='section-title'>{item.name}</p>
                                <p className='section-subTitle '>{item.speciality}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <button onClick={() => { navigate('/doctors/doctor_id'); window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>See More</button>
        </section >
    )
}

export default TopDoctors

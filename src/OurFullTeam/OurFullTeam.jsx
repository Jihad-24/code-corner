/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TeamProfiles from '../pages/Home/TeamProfiles';
import { Link } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';

const OurFullTeam = () => {
    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => { setProfiles(data) })
            .catch(error => {
                setError(error.message)
            })
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            {
                error && <p className="text-2xl text-red-600">{error}</p>
            }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {
                    profiles.map(profile => <TeamProfiles key={profile.id} profile={profile}></TeamProfiles>)
                }
                  
            </div>
            <Link to={"/"}> <button className='btn btn-neutral block mx-auto mt-10' data-aos="fade-up">Go Back Home</button></Link>
          
        </div>
    );
};

export default OurFullTeam;
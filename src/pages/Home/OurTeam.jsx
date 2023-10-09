/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import TeamProfiles from './TeamProfiles';

const OurTeam = () => {

    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState('');
    const [fullTeam, setFullteam] = useState(false);

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
            {
                error && <p className="text-2xl text-red-600">{error}</p>
            }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center" data-aos="fade-up">
                {
                    fullTeam ? profiles.map(profile => <TeamProfiles key={profile.id} profile={profile}></TeamProfiles>)
                        :
                        profiles.slice(0, 3).map(profile => <TeamProfiles key={profile.id} profile={profile}></TeamProfiles>)
                }
            </div>
            {
                profiles.length > 3 ? <button data-aos="fade-up" className='btn btn-neutral block mt-10 mx-auto' onClick={() => setFullteam(!fullTeam)}>{fullTeam ? 'See Less' : 'See More'}</button>
                    : ''
            }
        </div>
    );
};

export default OurTeam;
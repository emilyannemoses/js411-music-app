import React,{ useState } from 'react';
import OnlineMode from './OnlineMode';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';

export default function Dashboard() {

    return(<div>
        <div className="Welcome-text">Welcome User!</div>
        <div className="Cards-position">
            <OnlineMode />
            <MasterVolume />
            <SoundQuality />
        </div>
        <div className="System-text"><strong>System Notifications:</strong></div>
    </div>)
}
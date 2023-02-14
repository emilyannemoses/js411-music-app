import React,{ useState } from 'react';
import OnlineMode from './OnlineMode';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';

function Dashboard() {
    const [online, setOnline] = useState(true);
    const [value, setVolume] = useState(20);
    const [quality, setQuality] = useState(2);

    return(<div>
        <div className="Welcome-text">Welcome User!</div>
        <div className="Cards-position">
            <OnlineMode online={online} setOnline={setOnline}/>
            <MasterVolume value={value} setVolume={setVolume}/>
            <SoundQuality quality={quality} setQuality={setQuality}/>
        </div>
        <div className="System-text"><strong>System Notifications:</strong></div>
    </div>)
}

export default Dashboard;
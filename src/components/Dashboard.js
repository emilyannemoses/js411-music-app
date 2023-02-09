import React,{ useState } from 'react';
import OnlineMode from './OnlineMode';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';


export default function Dashboard() {

    return(<div>
        <OnlineMode />
        <MasterVolume />
        <SoundQuality />
    </div>)
}
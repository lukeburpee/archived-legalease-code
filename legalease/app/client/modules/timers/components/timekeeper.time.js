import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Colors from 'material-ui/styles/colors';
import PauseIcon from 'material-ui/svg-icons/av/pause';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import WorkIcon from 'material-ui/svg-icons/action/work';
import BreakIcon from 'material-ui/svg-icons/maps/local-cafe';

import Time from './timekeeper.timer';


const Timer = ({isplaying, isbreak, time, maxtime}) => (
    <div style={{
        display: 'flex',
        width: '100%',
        height: '90vh',
        flexDirection: 'row',
        alignItems: 'center',
        background:(isbreak)?'#f4645f':'#00bcd4'
    }}>
        <Time time={time} maxtime={maxtime} />
        <div style={{height:'56px', width:'100%', position:'absolute', bottom: '20px', left: 0, textAlign:'center'}}>
            <span style={{margin:'10px'}}>
                <FloatingActionButton mini={true} iconStyle={{color: '#00bcd4'}}>{(isplaying)?<PauseIcon/>:<PlayIcon/>}</FloatingActionButton>
            </span>
            <span style={{margin:'10px'}}>
                <FloatingActionButton mini={true} iconStyle={{color: '#00bcd4'}}><RefreshIcon/></FloatingActionButton>
            </span>
            <span style={{margin:'10px'}}>
                <FloatingActionButton mini={true} iconStyle={{color: '#00bcd4'}}>{(isbreak)?<WorkIcon/>:<BreakIcon/>}</FloatingActionButton>
            </span>
        </div>
    </div>
);

export default Timer;

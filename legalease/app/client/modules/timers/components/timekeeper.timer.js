import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Timer = ({time, maxtime}) => (
    <div style={{fontSize:'5em', fontWeight:'300', fontFamily:'Lato', width:'100%', textAlign:'center', height:'100px', color:'#fff', position:'relative'}}>
        <div style={{position:'absolute !important', top:'-160px', left:'0', width:'100%', textAlign:'center'}}>
            <CircularProgress mode="determinate" value={getPercent(time)} size={5} />
        </div>
    </div>
);

const getTime = (time) => {
    return moment.utc(time).format('mm.ss');
};

const getPercent = (time, maxtime) => {
    return 100 - ((maxtime - time) / maxtime * 100);
};

export default Timer;
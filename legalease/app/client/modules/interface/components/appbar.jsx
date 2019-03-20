import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';
import SvgIcon from 'material-ui/SvgIcon';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import PowerIcon from 'material-ui/svg-icons/action/power-settings-new';
import MeetingAdminVideo from './meetingadminvideo';

const Appbar = ({left, right, utilities, viewer, editor, meeting, meetingCount}) => (
    <AppBar
        zDepth={1}
        style={{
            position:'fixed',
            top: 0,
            left: (left && meeting && meetingCount > 3)?'30vw':(!left && meeting && meetingCount > 3)?'15vw':(left)?'20vw':0,
            right: (right && meeting && meetingCount > 3)?'30vw':(right)?'20vw':0,
            width:(left && right && meeting && meetingCount > 3)?'40vw':((meeting && meetingCount > 3) && ((!left && right) || (left && !right)))?'55vw':((meeting && meetingCount > 3) && !right && !left)?'70vw':(left && right)?'60vw':(left || right)?'80vw':'100vw',
            height: ((!left || !right || utilities || !viewer || !editor) && meeting && meetingCount > 3)?'24vh':(!left || !right || utilities || viewer || editor)?'8vh':(meeting)?'24vh':'16vh',
            display:'flex',
            minHeight: 0,
        }}
        iconElementLeft={<IconButton iconStyle={{height:'6vh', marginTop:-25, marginLeft:-10}}><object type="image/svg+xml" data="/icons/logo.svg" /></IconButton>}
        iconElementRight={<IconButton iconStyle={{width:26, height:26, marginTop:-25}}><PowerIcon style={{color:'white'}}/></IconButton>}
        showMenuIconButton
    >{(meeting && meetingCount > 3)? <MeetingAdminVideo/>:null}</AppBar>
);

export default Appbar;
import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { grey600 } from 'material-ui/styles/colors';
import UtilityToolbar from './utilities.jsx';
import Settings from './../../settings';
import Mail from './../../mail';
import Calendar from './../../calendar';
import TimeKeeper from './../../timekeeper';
import Chat from './../../chat';

const Secondary = React.createClass({
	setContent(){
		if (this.props.secondaryType === 'settings'){
			return <Settings/>
		} if (this.props.secondaryType === 'mail'){
			return <Mail/>
		} if (this.props.secondaryType === 'calendar'){
			return <Calendar events={data}/>
		} if (this.props.secondaryType === 'timekeeper'){
			return <TimeKeeper/>
		} if (this.props.secondaryType === 'chat'){
			return <Chat/>
		}
	},
	render(){
		return (
			<Paper style={secondaryStyle}>
				{this.setContent()}
			</Paper>
		);
	}
});

Secondary.propTypes = {
	secondaryType: PropTypes.string,
	onSettings: PropTypes.func,
	onMail: PropTypes.func,
	onCalendar: PropTypes.func,
	onTimekeeper: PropTypes.func,
	onChat: PropTypes.func
}

export default Secondary;

const wrapEventHandler = (self, handlerName) => {
  const handler = self.props[handlerName];
  if (handler && typeof handler === 'function') {
    return (...args) => {
      handler.apply(self, args);
    };
  }
  return () => {};
};

const secondaryStyle = {
	zIndex:1, 
	backgroundColor:grey600,
	width:'calc(33.333vw)', 
	height:'100%', 
	position:'fixed',
	top:0,
	bottom:'auto',
	left:'auto',
	right:0
}

const data = [{
            "type": "Published",
            "start": "2016-01-16T11:00:00.000Z",
            "title": "Meeting",
            "content": "Board meeting"
            }, {
            "type": "Activated",
            "start": "2016-01-17T12:00:00.000Z",
            "title": "Interview",
            "content": "with job seeker"
        }];
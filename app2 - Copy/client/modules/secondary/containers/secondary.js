import Secondary from './../components';
import { connect } from 'react-redux';
import { useDeps, composeAll } from 'mantra-core';

const mapStateToProps = (state) => ({
	secondaryType: state.secondaryType
});

const mapDispatchToProps = (dispatch, {actions}) => ({
	onSettings(){
		dispatch(actions().settings());
	},
	onMail: () => {
		dispatch(actions().secondary.mail());
	},
	onCalendar: () => {
		dispatch(actions().secondary.calendar());
	},
	onTimekeeper: () => {
		dispatch(actions().secondary.timekeeper());
	},
	onChat: () => {
		dispatch(actions().secondary.chat());
	}
});

export default composeAll(
	connect(mapStateToProps, mapDispatchToProps),
	useDeps())(Secondary);
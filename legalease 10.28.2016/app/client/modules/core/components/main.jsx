import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import theme from './../config/theme';

import { Provider } from 'react-redux';
import Private  from './private.jsx';
import ViewerLayout from './viewerlayout.jsx';
import Public from './public.jsx';
import Login from './login.jsx';
import PageNotFound from './pagenotfound.jsx';

injectTapEventPlugin();

const MuiTheme = getMuiTheme(theme);

const title = 'LegalEase'
DocHead.setTitle(title)

const metaInfo = { name: 'viewport', content: 'width=device-width, initial-scale=1' }
DocHead.addMeta(metaInfo)

const fontInfo = { name: 'link', href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,500', type: 'text/css' }
DocHead.addLink(fontInfo)


class Main extends Component {
	constructor(props) {
		super(props);

	}
	renderLayoutType(){
		if (this.props.type === 'private'){
			return <Private content={this.props.content}/>;
		} else if (this.props.type === 'viewer'){
			return <ViewerLayout content={this.props.content}/>
		} else if (this.props.type === 'login'){
			return <Login/>
		} else if (this.props.type === 'public'){
			return <Public content={this.props.content}/>
		} else {
			return <PageNotFound/>
		}
	}
	render(){
		return (
				<MuiThemeProvider muiTheme={MuiTheme}>
					<Provider store={this.props.store}>
						{this.renderLayoutType()}
					</Provider>
				</MuiThemeProvider>
		);
	}
}



export default Main;
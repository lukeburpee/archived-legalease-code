import React, { Component } from 'react'
import { indigo900 } from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'

class Background extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileView: window.innerWidth < 1024,
			leftSidebarOpen: this.props.leftSidebarOpen
		}
		this.handleResize = () => {
			this.setState({
				mobileView: window.innerWidth < 1024
			})
		}
	}
	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}
	render() {
		return (
			<Paper
				style={{
					backgroundColor: indigo900,
					paddingTop:'64px',
					paddingLeft: this.props.leftSidebarOpen ? '256px' : 0,
					height: 'calc(100vh - 64px)',
					width:'100vw'
				}}>
				{this.props.children}
			</Paper>
		);
	}
}

export default Background;
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import SimpleWebRTC from 'simplewebrtc';

class WebRTC extends Component {
	constructor(props){
		super(props);
		this.addVideo = this.addVideo.bind(this);
		this.removeVideo = this.removeVideo.bind(this);
		this.readyToCall = this.readyToCall.bind(this);
	}
	componentDidMount(){
		this.webrtc = new SimpleWebRTC({
			localVideoEl: ReactDOM.findDOMNode(this.refs.local),
			remoteVideoEl: '',
			autoRequestMedia: true,
			url: 'https://webrtc-signal-server:8888'
		});
		console.log('webrtc component mounted');
		this.webrtc.on('videoAdded', this.addVideo);
		this.webrtc.on('videoRemove', this.removeVideo);
		this.webrtc.on('readyToCall', this.readyToCall);
	}
	addVideo(video, peer){
		console.log('video added', peer);
		var remotes = ReactDOM.findDOMNode(this.refs.remotes);
		console.log(remotes);
		if (remotes){
			var container = document.createElement('div');
			container.className = 'videoContainer';
			container.id = 'container_' + this.webrtc.getDomId(peer);
			container.appendChild(video);
			video.oncontextmenu = ()=>{
				return false;
			}
			console.log(container);
			remotes.appendChild(container);
		}
	}
	removeVideo(video, peer){
		console.log('video removed ', peer);
		var remotes = ReactDOM.findDOMNode(this.refs.remotes);
		var el = document.getElementById(peer ? 'container_' + this.webrtc.getDomId(peer) : 'localScreenContainer');
			if (remotes && el){
			remotes.removeChild(el);
			}
	}
	readyToCall(){
		return this.webrtc.joinRoom(this.props.meeting);
	}
	connect(){
		console.log('connected');
	}
	disconnect(){
		console.log('disconnected');
	}
	render(){
		return(
			<div>
				{(this.props.remote)?<div className="remotes" id="remoteVideos" ref="remotes"/>:
				<video className="local" style={{position:'relative'}} height={'120vh'} width={'120vh'} id="localVideo" ref="local"/>}
			</div>
		);
	}
}

export default WebRTC;
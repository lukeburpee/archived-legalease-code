import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    const video = ReactDOM.findDOMNode(this.refs.video);

    if (!!this.props.src) {
      video.srcObject = this.props.src;
    }
  }

  componentWillReceiveProps(nextProps) {
    const video = ReactDOM.findDOMNode(this.refs.video);

    if (!!nextProps.src && nextProps.src !== this.props.src) {
      video.srcObject = nextProps.src;
    }
  }

  render() {
    const {props} = this;

    return (
      <video
        ref={'video'}
        style={{
        	width:props.width,
        	height:props.height
        }}
        muted={props.muted}
        autoPlay
        onClick={props.onTouchTap}>
      </video>
    );
  }
};

VideoComponent.propTypes = {
	width: React.PropTypes.number,
	height: React.PropTypes.number,
  muted: React.PropTypes.bool,
  onTouchTap: React.PropTypes.func,
  src: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.string,
  ]),
};

export default VideoComponent;

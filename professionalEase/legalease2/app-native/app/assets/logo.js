import React,{ Component } from 'react';
import SvgIcon from 'react-native-svg-icon';

const Logo = (props) => <SvgIcon {...props} name="logo" svgs={<object style={{height:36}} type="image/svg+xml" data="./icons/logo.scg"/>}/>
export default Logo;
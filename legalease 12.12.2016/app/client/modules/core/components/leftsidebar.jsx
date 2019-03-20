import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Drawer, FlatButton, List, ListItem } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import { MainLogo, TabletLogo } from './logo'
import core from './../actions'

class LeftSidebarImpl extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    const { dispatch, view } = this.props;
    if (view === 'mobile') {
      dispatch(core.setLeftSidebarMobile());
    } else if (view === 'tablet') {
      dispatch(core.setLeftSidebarTablet());
    } else if (view === 'desktop') {
      dispatch(core.setLeftSidebarDesktop());
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.view === 'mobile') {
      if (this.props.view === 'mobile') {
        return 
      } else {
        this.props.dispatch(core.setLeftSidebarMobile());
      }
    } else if (nextProps.view === 'tablet') {
      if (this.props.view === 'tablet'){
        return
      } else  {
        this.props.dispatch(core.setLeftSidebarTablet());
      }
    } else if (nextProps.view === 'desktop') {
      if (this.props.view === 'desktop'){
        return 
      } else {
        this.props.dispatch(core.setLeftSidebarDesktop());
      }
    }
  }
  handleClose(){
    this.props.dispatch(core.closeLeftSidebar());
  }
  renderLogo(){
    if (this.props.view === 'tablet'){
      return null;
    } else {
      return <MainLogo/>
    }
  }
  renderLinks(){
    let userLinks;
    if (this.props.links === null){
      userLinks = links;
    } else {
      userLinks = this.props.links;
    }
    return userLinks.map((link, i) => (
      <div key={i}>
      <ListItem
        style={linkStyle}
        leftIcon={<object style={iconStyle} type="image/svg+xml" data={link.icon}/>}
        href={link.href}
        primaryText={link.primaryText}
        onTouchTap={() => this.handleClose()}
        />
        <Divider/>
        </div>
    ));
  }
  render() {
    let links = this.renderLinks();
    return (
      <div>
        <Drawer
          style={{zIndex:50}}
          docked={false}
          open={this.props.open}
          onRequestChange={() => this.handleClose()}
          width={this.props.width ? this.props.width : null}
        >
          {this.renderLogo()}
          <List
            style={{paddingTop:100}}>
          {links}
          </List>
        </Drawer>
      </div>
    )
  }
}

const drawerStyle = {
  zIndex:50
}

const linkStyle = {
  paddingBottom:10
}

const iconStyle = {width:42, height:42, paddingBottom:7}

const links = [
  {
    name:'dashboard',
    primaryText:'Dashboard',
    icon: "/icons/dashboard.svg",
    href: '/dashboard'
  },{
    name:'clients',
    primaryText:'Clients',
    icon: "/icons/clients.svg",
    href: '/clients'
  },{
    name:'firms',
    primaryText:'Firms',
    icon: "/icons/firms.svg",
    href: '/firms'
  },{
    name:'cases',
    primaryText:'Cases',
    icon: "/icons/cases.svg",
    href:'/cases'
  },{
    name:'matters',
    primaryText:'Matters',
    icon: "/icons/matters.svg",
    href:'/matters'
  },{
    name:'discovery',
    primaryText:'Discovery',
    icon: "/icons/discovery.svg",
    href:'/discovery'
  }
];

export default LeftSidebarImpl

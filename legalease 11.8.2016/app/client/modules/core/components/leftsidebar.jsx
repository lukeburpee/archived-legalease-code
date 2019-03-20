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
  render() {
    return (
      <div>
        <Drawer
          style={{zIndex:50}}
          docked={this.props.docked}
          open={this.props.open}
          onRequestChange={() => this.handleClose()}
          width={this.props.width ? this.props.width : null}
        >
          {this.renderLogo()}
          <List
            style={{paddingTop:100}}>
            <ListItem
              style={linkStyle}
              leftIcon={<object style={iconStyle} type="image/svg+xml" data="/icons/clients.svg" />}
              href="/clients"
              primaryText="Clients"
              onTouchTap={() => this.handleClose()}
            />
            <Divider/>
            <ListItem
              style={linkStyle}
              leftIcon={<object style={iconStyle} type="image/svg+xml" data="/icons/firms.svg" />}
              href="/firms"
              primaryText="Firms"
              onTouchTap={() => this.handleClose()}
            />
            <Divider/>
            <ListItem
              style={linkStyle}
              leftIcon={<object style={iconStyle} type="image/svg+xml" data="/icons/courts.svg" />}
              href="/courts"
              primaryText="Courts"
              onTouchTap={() => this.handleClose()}
            />
            <Divider/>
            <ListItem
              style={linkStyle}
              leftIcon={<object style={iconStyle} type="image/svg+xml" data="/icons/cases.svg" />}
              href="/cases"
              primaryText="Cases"
              onTouchTap={() => this.handleClose()}
            />
            <Divider/>
            <ListItem
              style={linkStyle}
              leftIcon={<object style={iconStyle} type="image/svg+xml" data="/icons/discovery.svg" />}
              href="/discovery"
              primaryText="Discovery"
              onTouchTap={() => this.handleClose()}
            />
            <Divider/>
            <ListItem
              style={linkStyle}
              leftIcon={<object style={iconStyle} type="image/svg+xml" data="/icons/users.svg" />}
              href="/users"
              primaryText="Users"
              onTouchTap={() => this.handleClose()}
            />
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

const iconStyle = {width:36, height:36, paddingBottom:7}



export default LeftSidebarImpl

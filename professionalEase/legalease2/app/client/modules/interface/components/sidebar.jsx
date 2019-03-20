import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Drawer, FlatButton, List, ListItem } from 'material-ui'
import IconButton from 'material-ui/IconButton'

class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  handleClose(){
    return
  }
  renderLinks(){
    return <div></div>
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

export default SideBar

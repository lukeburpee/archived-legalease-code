import { connect } from 'react-redux'
import LeftSidebarImpl from './../components/leftsidebar.jsx';

const mapStateToProps = (state) => ({
  view: state.core.layout.view,
  docked: state.core.leftsidebar.leftSidebarDocked,
  width: state.core.leftsidebar.leftSidebarWidth,
  open: state.core.leftsidebar.leftSidebarOpen,
  leftSidebarWidth: state.core.leftsidebar.leftSidebarWidth,
  links: state.core.user.links
})

export const LeftSidebar = connect(mapStateToProps)(LeftSidebarImpl)
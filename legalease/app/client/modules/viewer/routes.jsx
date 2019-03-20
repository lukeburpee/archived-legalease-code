import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Viewer from './components/viewer';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/siscovery/viewer', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Viewer/>
  		})
  	}
  })
}
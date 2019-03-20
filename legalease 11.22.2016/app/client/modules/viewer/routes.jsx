import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

import Viewer from './components'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/viewer', {
  	action() {
  		mount(MainCtx, {
  			title: 'Viewer',
  			type: 'private',
  			content: <Viewer/>
  		})
  	}
  })
}

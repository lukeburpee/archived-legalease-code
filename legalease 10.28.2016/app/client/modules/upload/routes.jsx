import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/upload', {
  	action() {
  		mount(MainCtx, {
  			title: 'Cases',
  			type: 'private',
  			content: <div>This is the Upload Page</div>
  		})
  	}
  })
}

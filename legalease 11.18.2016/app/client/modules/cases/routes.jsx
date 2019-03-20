import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/cases', {
  	action() {
  		mount(MainCtx, {
  			title: 'Cases',
  			type: 'private',
  			content: <div>This is the Cases Page</div>
  		})
  	}
  })
}

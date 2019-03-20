import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/users', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <div>This is the Users Page</div>
  		})
  	}
  })
}

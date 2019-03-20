import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/clients', {
  	action() {
  		mount(MainCtx, {
  			title: 'Clients',
  			type: 'private',
  			content: <div>This is the Clients Page</div>
  		})
  	}
  })
}

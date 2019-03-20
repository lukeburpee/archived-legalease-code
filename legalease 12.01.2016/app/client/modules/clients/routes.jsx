import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/clients/new', {
  	action() {
  		mount(MainCtx, {
  			title: 'Clients',
  			type: 'private',
  			content: <div>This is the New Client Page</div>
  		})
  	}
  })
  FlowRouter.route('/clients/:id', {
    action() {
      mount(MainCtx, {
        title: 'Update Client',
        type: 'private',
        content: <div>This is the Update Client Page</div>
      })
    }
  })
}

import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/firms/new', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <div>new firm form</div>
  		})
  	}
  })
  FlowRouter.route('firms/:id', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <div>update firm form</div>
  		})
  	}
  })
}

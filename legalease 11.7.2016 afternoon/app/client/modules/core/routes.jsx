import React from 'react'
import { mount } from 'react-mounter'
import { Main }  from './containers'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Home', {
  	action() {
  		mount(MainCtx, {
  			type: 'public',
  			content: <div>This is the Home Page</div>
  		})
  	}
  })
  FlowRouter.route('/Login', {
  	action() {
  		mount(MainCtx, {
  			type: 'login'
  		})
  	}
  })
}

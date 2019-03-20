import React from 'react'
import { mount } from 'react-mounter'
import Main  from './containers/main'
import Private from './components/private';

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
  FlowRouter.route('/login', {
    action(params){
      mount(MainCtx, {
        type: 'login',
        content: <div>this is the login page</div>
      })
    }
  })
  FlowRouter.route('/reset-password', {
    action(params){
      mount(MainCtx, {
        type: 'public',
        content: <div>this is the reset password page</div>
      });
    }
  })
  FlowRouter.route('/register', {
    action(params){
      mount(MainCtx, {
      type: 'public',
      content: <div>this is the registration page</div>
      })
    }
  })
  FlowRouter.route('/dashboard', {
    action(params){
      mount(MainCtx, {
      type: 'private',
      content: <Private/>
      })
    }
  })
}
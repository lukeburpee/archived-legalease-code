import React from 'react'
import Login from './components/login.jsx';
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
  FlowRouter.route('/login', {
    action(params){
      mount(MainCtx, {
        type: 'login',
        content: <Login/>
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
  FlowRouter.route('/register-firm', {
    action(params){
      mount(MainCtx, {
        type: 'public',
        content: <div>this is the register firm page</div>
      })
    }
  })
  FlowRouter.route('/register-client', {
    action(params){
      mount(MainCtx, {
        type: 'public',
        content: <div>this is the register client page</div>
      })
    }
  })
  FlowRouter.route('/register-vendor', {
    action(params){
      mount(MainCtx, {
        type: 'public',
        content: <div>this is the register vendor page</div>
      })
    }
  })
}
import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Timers from './components/timers';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Timers', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Timers/>
  		})
  	}
  })
}
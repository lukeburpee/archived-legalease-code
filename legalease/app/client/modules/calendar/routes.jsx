import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Calendar from './components/calendar';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Calendar', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Calendar/>
  		})
  	}
  })
}
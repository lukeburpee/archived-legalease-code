import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Matters from './components/matters';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Discovery', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Matters/>
  		})
  	}
  })
}
import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Discovery from './components/discovery';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Discovery', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Discovery/>
  		})
  	}
  })
}
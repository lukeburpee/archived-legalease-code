import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Mail from './components/mail';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Mail', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Mail/>
  		})
  	}
  })
}
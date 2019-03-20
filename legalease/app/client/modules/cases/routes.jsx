import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Cases from './components/cases';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Cases', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Cases/>
  		})
  	}
  })
}
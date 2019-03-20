import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Collections from './components/collections';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/discovery/collections', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Collections/>
  		})
  	}
  })
}
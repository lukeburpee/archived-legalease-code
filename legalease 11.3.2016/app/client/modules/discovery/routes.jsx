import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'
import { Discovery } from './components'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/discovery', {
  	action() {
  		mount(MainCtx, {
  			title: 'Discovery',
  			type: 'private',
  			content: <Discovery/>
  		})
  	}
  })
}

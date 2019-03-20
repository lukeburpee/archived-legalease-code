import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

import Matters from './components/matters.jsx';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/matters', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Matters/>
  		})
  	}
  })
}

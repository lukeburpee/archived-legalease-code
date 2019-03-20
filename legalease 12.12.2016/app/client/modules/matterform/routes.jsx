import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

import NewMatter from './components/newmatter.jsx';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/matters/new', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <NewMatter/>
  		})
  	}
  })
}

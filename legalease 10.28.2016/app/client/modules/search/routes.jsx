import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'

import { Search } from './components'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/discovery/search', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Search/>
  		})
  	}
  })
}

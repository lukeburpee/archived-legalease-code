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
  			content: <div style={{paddingTop:50, paddingLeft:50, paddingRight:80}}><Search/></div>
  		})
  	}
  })
}

import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'
import Processing from './components'
export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/processing', {
  	action() {
  		mount(MainCtx, {
  			title: 'Cases',
  			type: 'private',
  			content: <Processing/>
  		})
  	}
  })
}
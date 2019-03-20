import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Lists from './components/persistentlists';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Discovery', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Lists/>
  		})
  	}
  })
}
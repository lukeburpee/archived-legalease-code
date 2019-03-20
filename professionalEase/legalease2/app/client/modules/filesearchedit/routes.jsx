import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import FileSearch from './components/filesearch';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Discovery/Search', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <FileSearch/>
  		})
  	}
  })
}
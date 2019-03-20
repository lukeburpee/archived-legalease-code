import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import Editor from './components/editor';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/Cases/Editor', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Editor/>
  		})
  	}
  })
}
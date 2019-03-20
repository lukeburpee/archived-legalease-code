import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import FormBuilder from './components/formbuilder';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/discovery/forms/formbuilder/new', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <FormBuilder/>
  		})
  	}
  })
}
import React from 'react'
import { mount } from 'react-mounter'
import Main  from './../core/containers/main'
import FileSearch from './components/filesearch';

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/discovery/search', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <FileSearch/>
  		})
  	}
  })
  FlowRouter.route('/discovery/search/new', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <FileSearch/>
  		})
  	}
  })
  FlowRouter.route('/discovery/search/edit/:id', {
  	action(params) {
  		mount(MainCtx, {
  			type: 'private',
  			content: <FileSearch/>
  		})
  	}
  })
}
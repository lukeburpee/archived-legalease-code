import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'
import { Discovery } from './components'

export default function (injectDeps, { FlowRouter, dispatch }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/discovery', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: <Discovery/>
  		})
  	}
  })
  FlowRouter.route('/discovery/search', {
    action() {
      mount(MainCtx, {
        type: 'private',
        content: <Discovery activePanel={0}/>
      })
    }
  })
  FlowRouter.route('/discovery/documents', {
    action() {
      mount(MainCtx, {
        type: 'private',
        content: <Discovery activePanel={1}/>
      })
    }
  })
  FlowRouter.route('/discovery/batches', {
    action() {
      mount(MainCtx, {
        type: 'private',
        content: <Discovery activePanel={2}/>
      })
    }
  })
  FlowRouter.route('/discovery/reports', {
    action() {
      mount(MainCtx, {
        type: 'private',
        content: <Discovery activePanel={3}/>
      })
    }
  })
  FlowRouter.route('/discovery/highlights', {
    action() {
      mount(MainCtx, {
        type: 'private',
        content: <Discovery activePanel={4}/>
      })
    }
  })
  FlowRouter.route('/discovery/forms', {
    action() {
      mount(MainCtx, {
        type: 'private',
        content: <Discovery activePanel={5}/>
      })
    }
  })
  FlowRouter.route('/discovery/processing', {
    action() {
      mount(MainCtx, {
        type: 'private',
        content: <Discovery activePanel={6}/>
      })
    }
  })
}

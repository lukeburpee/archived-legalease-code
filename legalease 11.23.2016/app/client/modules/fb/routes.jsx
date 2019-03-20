import React from 'react'
import { mount } from 'react-mounter'
import { Main } from './../core'
import FieldList from './containers/builder/FieldListContainer'
import Form from './containers/builder/FormContainer'

export default function (injectDeps, { FlowRouter }) {
  const MainCtx = injectDeps(Main)

  FlowRouter.route('/discovery/fb', {
  	action() {
  		mount(MainCtx, {
  			type: 'private',
  			content: 
  				<div style={{paddingTop:50}}>
  					<div className="container">
        				<div className="row">
        					<div className="col-sm-3">
  								<FieldList/>
  							</div>
  							<div className="col-sm-8">
  								<Form/>
  							</div>
  						</div>
  					</div>
  				</div>
  		})
  	}
  })
}

import React,{ Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import {indigo200} from 'material-ui/styles/colors';
import DraggableListItem from './draggablelistitem';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton,RadioButtonGroup} from 'material-ui/RadioButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import CalendarIcon from 'material-ui/svg-icons/action/date-range';

class FormElementList extends Component {
	constructor(props){
		super(props);
		this.state = {
			dragging: false,
			elements: [
				{label:'Checkbox', data:{type:'checkbox', required:false, value:false}, icon: <Checkbox style={{position:'relative', top:7}} checked={true}/>},
				{label:'Checkbox List', data:{type:'checkboxlist', required:false, options:[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'}], selected:[]}, icon: <div style={{position:'relative', bottom:5}}><Checkbox/><Checkbox checked={true}/></div>},
				{label:'Date', data:{type:'date', required:false, value:[]}, icon: <div><CalendarIcon style={{position:'relative', right:15, top:5}}/></div>},
				{label:'Radio', data:{type:'radio', required:false}, icon: <RadioButton style={{position:'relative', top:7}} />},
				{label:'Radio List', data:{type:'radiolist', required:false, options:[], value:''}, icon: <RadioButtonGroup style={{position:'relative', bottom:5}} valueSelected="one"><RadioButton value="one"/><RadioButton value="two"/></RadioButtonGroup>},
				{label:'Chip Input', data:{type:'chip', label:'Chips', required:false, value:[]}, icon: <div style={{position:'relative', top:5}}><Chip onRequestDelete={()=>{return null}}>Chip</Chip></div>},
				{label:'Text Input', data:{type:'text', label:'Text Input', required:false, value:''}, icon: <TextField floatingLabelFixed={true} floatingLabelText="Text Input" style={{width:100, position:'relative', bottom:20}}/>},
				{label:'Text Area', data:{type:'textarea', label:'Text Area', required:false, value:''}, icon:<TextField style={{position:'relative', bottom:20, width:100}} floatingLabelFixed={true} floatingLabelText="Text Area" />},
				{label:'Select', data:{type:'select', label:'Select', required:false, options:[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'}], value:''}, icon:<SelectField style={{position:'relative', bottom:20, width:100}} floatingLabelFixed={true} floatingLabelText="Select"/>},
				{label:'Toggle', data:{type:'toggle', label:'Toggle', required:false, value:false}, icon: <Toggle style={{position:'relative', top:7}}/>}
			]
		}
	}
	componentWillMount(){
		let {elements} = this.state;
		if (this.props.elements){
			this.setState({
				...elements,
				...this.props.elements
			});
		}
	}
	dragStart(){
		this.setState({dragging:true});
	}
	dragEnd(){
		this.setState({dragging:false});
	}
	render(){
		const { dragging, elements } = this.state;
		return(
			<List style={{width:'inherit', height:'calc(92vh)', overflow:'scroll'}}>
				{(()=>elements.map((element, i)=>(
					<DraggableListItem 
						key={`form_element_${i}`} 
						type={'form-element'} 
						data={element.data} 
						avatar={element.icon} 
						label={element.label}
						onDragStart={()=>this.dragStart()}
						onDragEnd={()=>this.dragEnd()}/>
				)))()}
			</List>
		);
	}
}

export default FormElementList;
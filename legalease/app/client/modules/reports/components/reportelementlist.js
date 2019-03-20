import React,{ Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import {indigo200} from 'material-ui/styles/colors';
import DraggableListItem from './draggablelistitem';
import Avatar from 'material-ui/Avatar';
import PublicIcon from './../../interface/components/publicicon';


class ReportElementList extends Component {
	constructor(props){
		super(props);
		this.state = {
			dragging: false,
			elements: [
				{label:'Stats', data:{}, icon: <PublicIcon path='/icons/reports/ic_spreadsheet.svg' size={96}/>},
				{label:'Bar Chart', data:{}, icon:<PublicIcon path='/icons/reports/ic_stats_bar_chart.svg' size={96}/>},
				{label:'Line Chart', data:{}, icon:<PublicIcon path='/icons/reports/ic_stats_line_chart.svg' size={96}/>},
				{label:'Pie Chart', data:{}, icon: <PublicIcon path='/icons/reports/ic_stats_pie_chart.svg' size={96}/>},
				{label:'Scatter Chart', data:{}, icon: <PublicIcon path='/icons/reports/ic_animation.svg' size={96}/>},
				{label:'Timeline', data:{}, icon: <PublicIcon path='/icons/reports/ic_spreadsheet.svg' size={96}/>},
				{label:'Org Chart', data:{}, icon: <PublicIcon path='/icons/reports/ic_organizational_chart.svg' size={96}/>}
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
						key={`report_element_${i}`} 
						type={'report-element'} 
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

export default ReportElementList;
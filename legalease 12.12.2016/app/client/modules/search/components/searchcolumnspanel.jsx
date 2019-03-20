import React,{ Component } from 'react'
import { indigo900 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'
import { Draggable, Droppable } from 'react-drag-and-drop'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

class SearchColumnsPanel extends Component {
	constructor(props){
		super(props);
		this.state = {
			exclude: [
				'custodian', 
				'to', 
				'from', 
				'cc', 
				'bcc', 
				'created_date', 
				'uploaded_date', 
				'last_modified_date'
			],
			include: [
				'icon', 
				'control number', 
				'name'
			],
			currentHover: null
		}
	}
	onDropInclude(data){
		const { include, exclude, currentHover } = this.state;
		let dropDataIndex = include.indexOf(data.column);
		let currentHoverIndex = include.indexOf(currentHover);
		if(dropDataIndex === -1){
			let newInclude = [
				...include.slice(0, currentHoverIndex),
				data.column,
				...include.slice(currentHoverIndex,)
			];
			let newExclude = [
				...exclude.slice(0, exclude.indexOf(data.column)),
				...exclude.slice(exclude.indexOf(data.column) + 1,)
			];
			this.setState({
				include: newInclude,
				exclude: newExclude
			});
		} else {
			if (currentHoverIndex >= dropDataIndex){
				let newInclude = [
					...include.slice(0, dropDataIndex),
					...include.slice(dropDataIndex + 1,currentHoverIndex),
					data.column,
					...include.slice(currentHoverIndex,)
				];
				console.log(newInclude);
				this.setState({
					include: newInclude
				});
			} else {
				let newInclude = [
					...include.slice(0, currentHoverIndex),
					data.column,
					...include.slice(currentHoverIndex, dropDataIndex),
					...include.slice(dropDataIndex + 1,)
				];
				console.log(newInclude);
				this.setState({
					include: newInclude
				});
			}
		}
	}
	onDropExclude(data){
		const { include, exclude, currentHover } = this.state;
		let dropDataIndex = exclude.indexOf(data.column);
		let currentHoverIndex = exclude.indexOf(currentHover);
		if(dropDataIndex === -1){
			let newExclude = [
				...exclude.slice(0, currentHoverIndex),
				data.column,
				...exclude.slice(currentHoverIndex,)
			];
			let newInclude = [
				...include.slice(0, include.indexOf(data.column)),
				...include.slice(include.indexOf(data.column) + 1,)
			];
			this.setState({
				include: newInclude,
				exclude: newExclude
			});
		} else {
			if (currentHoverIndex >= dropDataIndex){
				let newExclude = [
					...exclude.slice(0, dropDataIndex),
					...exclude.slice(dropDataIndex + 1,currentHoverIndex),
					data.column,
					...exclude.slice(currentHoverIndex,)
				];
				console.log(newExclude);
				this.setState({
					exclude: newExclude
				});
			} else {
				let newExclude = [
					...exclude.slice(0, currentHoverIndex),
					data.column,
					...exclude.slice(currentHoverIndex, dropDataIndex),
					...exclude.slice(dropDataIndex + 1,)
				];
				console.log(newExclude);
				this.setState({
					exclude: newExclude
				});
			}
		}
	}
	onColumnItemHover(event){
		this.setState({
			currentHover: event.currentTarget.id
		})
	}
	renderColumns(columns){
		return columns.map((col, i) =>(
			<Draggable key={i} id={col} type="column" data={col} onDragEnter={this.onColumnItemHover.bind(this)}>
				<ListItem primaryText={col}/>
			</Draggable>
		))
	}
	render(){
		return (
			<Card 
				expanded={true}
				style={{width:'inherit', marginBottom:25}}
				expandable={true}>
				<CardHeader 
					showExpandableButton={true}
					titleColor={'white'} 
					style={{backgroundColor:indigo900}} 
					title="Columns"/>
				<CardText>
					<GridList
						cellHeight={180}
						rows={1}
						cols={2}>
						<GridTile
							rows={1}
							cols={1}
							style={{overflowY:'scroll'}}>
							<Droppable
								onDrop={this.onDropExclude.bind(this)}
								types={["column"]}>
								<Subheader>Excluded</Subheader>
								<List>
								{this.renderColumns(this.state.exclude)}
								</List>
							</Droppable>
						</GridTile>
						<GridTile
							rows={1}
							cols={1}
							style={{overflowY:'scroll'}}>
							<Droppable
								onDrop={this.onDropInclude.bind(this)}
								types={["column"]}>
								<Subheader>Included</Subheader>
								<List>
								{this.renderColumns(this.state.include)}
								</List>
							</Droppable>
						</GridTile>
					</GridList>
				</CardText>
			</Card>
		);
	}
}

export default SearchColumnsPanel;
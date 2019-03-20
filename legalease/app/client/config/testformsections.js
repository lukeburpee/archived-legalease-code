export const formSections = [
				{label:'section 1', editLabel:true, fields:[
					{label:'field 1', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 2', fields:[
					{label:'field 1', type:'checkboxlist', value: ['option1', 'option2'], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'radiolist', value: [], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 1', type:'checkboxlist', value: [], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'radiolist', value: [], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 3', fields:[
					{label:'field 1', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 4', fields:[
					{label:'field 1', type:'chip', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 5', fields:[
					{label:'field 1', type:'chip', value: [], colSpan:2},
					{label:'field 2', type:'textarea', value:'', colSpan:2},
					{label:'field 1', type:'text', value: '', colSpan:2},
					{label:'field 2', type:'textarea', value:'', colSpan:2},
					
				]},
				{label:'section 5', fields:[
					{label:'field 1', type:'checkboxlist', columns:2, colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'},{label:'option 3', value:'option3'},{label:'option 4', value:'option4'}], value:[]}					
				]}
			]

export const formFields = [{label:'field 1', type:'checkboxlist', options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}], value:''},{label:'field 2', type:'radiolist', options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}]

export const formFieldsWColumns = [{label:'field 1', type:'checkboxlist', colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}], value:''},{label:'field 2', type:'radiolist', colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}]

export const formFieldsWColumnsOpenForEdit = [{label:'field 1', type:'checkboxlist', open:true, colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}], value:''},{label:'field 2', type:'radiolist', colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}]

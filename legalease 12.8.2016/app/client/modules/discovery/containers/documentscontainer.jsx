import { compose } from 'react-komposer';
import Documents from './../components/documents.jsx';

const onPropsChange = (props, onData) => {
  const config = docConfig;
	onData(null, {config});
}

export default compose(onPropsChange)(Documents);

const documentData = [
  { id: 1, name: 'Chikwa Eligson', age: 24, location: 'Lagos', level: 'stage-1', mood: 'happy' },
  { id: 2, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', mood: 'anxious' },
  { id: 3, name: 'John Lee', age: 20, location: 'Abuja', level: 'stage-2', mood: 'indifferent' },
  { id: 4, name: 'Binta Pelumi', age: 22, location: 'Jos', level: 'stage-3', mood: 'sad' },
  { id: 5, name: 'Cassidy Ferangamo', age: 30, location: 'Lagos', level: 'stage-4', mood: 'angry' },
  { id: 6, name: 'Damian Swaggbag', age: 35, location: 'PortHarcourt', level: 'stage-1', mood: 'bitter' },
  { id: 7, name: 'Loveth Sweetstick', age: 20, location: 'Imo', level: 'stage-3', mood: 'happy' },
  { id: 8, name: 'Zzaz Zuzzi', age: 19, location: 'Bayelsa', level: 'stage-2', mood: 'party-mood' },
  { id: 9, name: 'Ian Sweetmouth', age: 18, location: 'Enugu', level: 'stage-4', mood: 'happy' },
  { id: 10, name: 'Elekun Bayo', age: 21, location: 'Zamfara', level: 'stage-4', mood: 'anxious' },
  { id: 11, name: 'Chikwa Eligson', age: 24, location: 'Lagos', level: 'stage-1', mood: 'happy' },
  { id: 12, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', mood: 'anxious' },
  { id: 13, name: 'John Lee', age: 20, location: 'Abuja', level: 'stage-2', mood: 'indifferent' },
  { id: 14, name: 'Binta Pelumi', age: 22, location: 'Jos', level: 'stage-3', mood: 'sad' },
  { id: 15, name: 'Cassidy Ferangamo', age: 30, location: 'Lagos', level: 'stage-4', mood: 'angry' },
  { id: 16, name: 'Damian Swaggbag', age: 35, location: 'PortHarcourt', level: 'stage-1', mood: 'bitter' },
  { id: 17, name: 'Loveth Sweetstick', age: 20, location: 'Imo', level: 'stage-3', mood: 'happy' },
  { id: 18, name: 'Zzaz Zuzzi', age: 19, location: 'Bayelsa', level: 'stage-2', mood: 'party-mood' },
  { id: 19, name: 'Ian Sweetmouth', age: 18, location: 'Enugu', level: 'stage-4', mood: 'happy' },
  { id: 20, name: 'Elekun Bayo', age: 21, location: 'Zamfara', level: 'stage-4', mood: 'anxious' },
  { id: 21, name: 'Chikwa Eligson', age: 24, location: 'Lagos', level: 'stage-1', mood: 'happy' },
  { id: 22, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', mood: 'anxious' },
  { id: 23, name: 'John Lee', age: 20, location: 'Abuja', level: 'stage-2', mood: 'indifferent' },
  { id: 24, name: 'Binta Pelumi', age: 22, location: 'Jos', level: 'stage-3', mood: 'sad' },
  { id: 25, name: 'Cassidy Ferangamo', age: 30, location: 'Lagos', level: 'stage-4', mood: 'angry' },
  { id: 26, name: 'Damian Swaggbag', age: 35, location: 'PortHarcourt', level: 'stage-1', mood: 'bitter' },
  { id: 27, name: 'Loveth Sweetstick', age: 20, location: 'Imo', level: 'stage-3', mood: 'happy' },
  { id: 28, name: 'Zzaz Zuzzi', age: 19, location: 'Bayelsa', level: 'stage-2', mood: 'party-mood' },
  { id: 29, name: 'Ian Sweetmouth', age: 18, location: 'Enugu', level: 'stage-4', mood: 'happy' },
  { id: 30, name: 'Elekun Bayo', age: 21, location: 'Zamfara', level: 'stage-4', mood: 'anxious' },
  { id: 31, name: 'Chikwa Eligson', age: 24, location: 'Lagos', level: 'stage-1', mood: 'happy' },
  { id: 32, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', mood: 'anxious' },
  { id: 33, name: 'John Lee', age: 20, location: 'Abuja', level: 'stage-2', mood: 'indifferent' },
  { id: 34, name: 'Binta Pelumi', age: 22, location: 'Jos', level: 'stage-3', mood: 'sad' },
  { id: 35, name: 'Cassidy Ferangamo', age: 30, location: 'Lagos', level: 'stage-4', mood: 'angry' },
  { id: 36, name: 'Damian Swaggbag', age: 35, location: 'PortHarcourt', level: 'stage-1', mood: 'bitter' },
  { id: 37, name: 'Loveth Sweetstick', age: 20, location: 'Imo', level: 'stage-3', mood: 'happy' },
  { id: 38, name: 'Zzaz Zuzzi', age: 19, location: 'Bayelsa', level: 'stage-2', mood: 'party-mood' },
  { id: 39, name: 'Ian Sweetmouth', age: 18, location: 'Enugu', level: 'stage-4', mood: 'happy' },
  { id: 40, name: 'Elekun Bayo', age: 21, location: 'Zamfara', level: 'stage-4', mood: 'anxious' },
];

const docConfig = {
  paginated: {
  	rowsPerPage: 50,
  	menuOptions: [50, 100, 250, 500]
  },
  search: 'name',   
  data: documentData,
  columns: [
    { property: 'id', title: 'S/N'},
    { property: 'name', title: 'Name' },
    { property: 'age', title: 'Age' },
    { property: 'location', title: 'Location' },
    { property: 'level', title: 'level' },
    { title: 'Mood', renderAs: function (data) {
      return `${data.name} is in a ${data.mood} mood.`;
    }},
  ]
};
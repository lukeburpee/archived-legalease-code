import methodStubs from './configs/method_stubs';
import actions from './actions';
import routes from './routes';
import reducers from './reducers';

export default {
	load(context){
		methodStubs(context);
	},
	routes,
	actions,
	reducers
}
import routes from './routes';
import actions from './actions';
import methodStubs from './configs/method_stubs';
import reducers from './reducers';

export default {
	routes,
	actions,
	reducers,
	load(context){
		methodStubs(context);
	}
}
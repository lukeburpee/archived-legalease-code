import routes from './routes';
import methodStubs from './configs/method_stubs';

export default {
	routes,
	load(context){
		methodStubs(context);
	}
}
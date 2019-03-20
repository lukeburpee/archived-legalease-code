import LegalEase from './containers/legalease';
import { AppRegistry } from 'react-native';

export default function(injectDeps){
	const LegalEaseCtx = injectDeps(LegalEase);
	AppRegistry.registerComponent('legalease', ()=> LegalEaseCtx);
}
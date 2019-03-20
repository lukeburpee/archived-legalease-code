import { 
	DISCOVERY_SET_ACTIVE_PANEL
} from './types';

export default {
	setDiscoveryPanel(panel) {
		return { 
			type: DISCOVERY_SET_ACTIVE_PANEL,
			activePanel: panel
		};
	}
}
const defaultState = {
	// user module
	user: {
		// general info state
		general: {
			username: null,
			updating: null,
			updated: null,
			avatar: null,
			databases: [],
			clients: [],
			firms: [],
			cases: [],
			discovery: [],
			reviews: [],
			forms: [],
			searches: []
		},
		// permission state
		permissions: {
			utilities: {
				settings: null,
				mail: null,
				calendar: null,
				timekeeper: null,
				chat: null,
			},
			pages: {
				clients: null,
				firms: null,
				vendors: null,
				cases: null,
				discovery: null
			},
			clients: {
				create: null,
				read: null,
				update: null,
				delete: null
			},
			firms: {
				create: null,
				read: null,
				update: null,
				delete: null
			},
			cases: {
				create: null,
				read: null,
				update: null,
				delete: null,
				search: null,
				privatesearch: null,
				publicsearch: null
			},
			matters: {
				create: null,
				read: null,
				update: null,
				delete: null,
			},
			discovery: {
				privatesearches: false,
				privatesavedsearches: false,
				publicsearches: false,
				publicsavedsearches: false,
				forms: {
					general: {
						create: false,
						read: false,
						update: false,
						delete: false
					},
					elements: {
						create: false,
						read: false,
						update: false,
						delete: false
					}
				}
			},
			templates: {
				create: false,
				read: false,
				update: false,
				delete: false
			},
			matters: {

			}
		},

		// user settings state
		settings: {
			updating: false,
			updated: false,
			navtype: 'left-sidebar'
		},

		clients: {
			available: []
		},
		cases: {
			available: []
		},
		matters: {
			available: []
		},
	},
	layout: {
		main: {
			mobile: null,
		},
		private: {
			nav: {
				width: null
			},
			appbar: {
				width: null
			},
			left: {
				width: null
			},
			primary: {
				width: null
			},
			right: {
				width: null
			}
		},
		public: {
			nav: {
				width: null
			}
		}
	},
	utilities: {
		settings: {
			open: null
		},
		mail: {
			open: null
		},
		calendar: {
			open: null
		},
		timekeeper: {
			open: null
		},
		chat: {
			open: null
		},
	},

	// client specific
	clients: {
		general: {
			open: null,
			creating: null,
			created: null,
			updating: null,
			updated: null,
			saving: null,
			saved: null
		}
	},
	// firm specific
	firms: {
		general: {
			open: null,
			creating: null,
			created: null,
			updating: null,
			updated: null,
			saving: null,
			saved: null
		}
	},
	// case specific
	cases: {
		general: {
			open: null,
			creating: null,
			created: null,
			updating: null,
			updated: null,
			saving: null,
			saved: null
		},
		search: {
			open: null,
			searching: null,
			recieved: null,
			updating: null,
			schema: [],
			stats: [],
			results: []
		}
	},
	// discovery specific
	discovery: {
		general: {
			updating: null,
			updated: null,
			saving: null,
			saved: null
		},
		workflows: null,
		productions: null,
		reviews: null,
		search: {
			open: null,
			searching: null,
			recieved: null,
			updating: null,
			schema: [],
			stats: [],
			results: []
		},
		documents: {
			current: {
				body: null,
				text: null,
				type: null,
				image: null,
				metadata: null,
				history: null,
				duplicates: null,
				textduplicates: null,
				versions: null,
				draft: null,
				final: null
			},
			cache: []
		}
	}
}

export default defaultState;
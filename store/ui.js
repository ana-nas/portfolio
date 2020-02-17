export const TOGGLE_MENU = 'TOGGLE_MENU';

export const state = () => ({
	isMenuOpen: false,
});

export const getters = {
};

export const actions = {
	toggleMenu: ({commit, state}, menuState) => {
		if (menuState === undefined) {
			commit(TOGGLE_MENU, !state.isMenuOpen);
		} else {
			commit(TOGGLE_MENU, menuState);
		}
	},
	hideMenu: ({commit}) => {
		commit(TOGGLE_MENU, false);
	},
};

export const mutations = {
	[TOGGLE_MENU]: (state, menuState) => {
		state.isMenuOpen = menuState;
	},
};

export default function({store}) {
	// Hide menu
	const isVisible = store.state.ui.isMenuOpen;

	if (isVisible) {
		store.dispatch('ui/hideMenu');
	}
}

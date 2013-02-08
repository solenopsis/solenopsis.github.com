function updateNav() {
	var id = '';

	if (window.location.hash) {
		id = window.location.hash;
	} else {
		var pathname = window.location.pathname;
		var parts = pathname.split('/');
		var id = (parts[1] === '') ? '#home' : '#'+parts[1];
	}

	jQuery('li'+id).addClass('active');
}

jQuery(document).ready(function() {
	jQuery('.dropdown-toggle').dropdown();
	updateNav();
});
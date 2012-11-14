var POST_HOME = 'http://public-api.wordpress.com/rest/v1/sites/solenopsisorg.wordpress.com/posts/';

var display_posts = function (data) {
	jQuery.each(data.posts, function (index, value) {
		var html;

		html = '\t\t\t\t<div class="feed-item">';
		html = html + '\t\t\t\t\t<h3><a href="'+value.URL+'">'+value.title+'</a></h3>';
		html = html + '\t\t\t\t\t<p>'+value.excerpt+'</p>';
		html = html + '\t\t\t\t\t<p class="who"><span class="author"><a href="'+value.author.URL+'">'+value.author.name+'</a></span> - <span class="when">'+value.date+'</span></p>';
		html = html + '\t\t\t\t</div>';

		jQuery('#blog').append(html);
		console.log(value);
	});
};

var load_posts = function () {
	jQuery.ajax({
		url: POST_HOME,
		success: display_posts,
		dataType: 'jsonp'
	});
};

jQuery(document).ready(load_posts);
// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	autoSlide: 10000, //10 seconds
	controls: false,
	progress: false,
	loop: true,
	transition: 'none',

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'plugin/external/external.js', condition: function() { return !!document.querySelector( '[data-external]' ); } },
		{ src: 'plugin/markdown/marked.js' },
		{ src: 'plugin/markdown/markdown.js' }
	]
});
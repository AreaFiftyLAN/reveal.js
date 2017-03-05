// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: false,
	slideNumber: true,
	progress: false,
	loop: true,
	transition: 'fade',
	width: 1280,
	height: 720,

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'plugin/external/external.js', condition: function() { return !!document.querySelector( '[data-external]' ); } },
		{ src: 'plugin/markdown/marked.js' },
		{ src: 'plugin/markdown/markdown.js' }
	]
});
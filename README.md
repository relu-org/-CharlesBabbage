# CharlesBabbage

Get content from GITHUB and storage it into JavaScript object

/* Example usage - download README.md file from this repo */
_GITHUB.get_content({
	'repo':'relu-org/CharlesBabbage/',
	'branch':'master',
	'filter':'README'
	},
	/* callback */
	function() {
		console.log('--LOADED DATA--');
		console.log(_GITHUB.data);
});

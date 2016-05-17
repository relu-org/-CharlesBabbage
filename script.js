var _GITHUB = {
	data:{},
	response:{},
	counter:0,
	filter:'',
	path:'',
	get_list: function(path, branch, filter){
		this.path = path;
		if(!filter){
			this.filter = null;
		}
		loadFile( function(response) {
			_GITHUB.response = JSON.parse(response);
			_GITHUB.load(filter);
		}, 'https://api.github.com/repos/'+path+'git/trees/'+branch); 
	},
	load: function(filter){
		_this = this;
		if(filter){
			res = this.response.tree[this.counter].path.search(filter);
		}else{
			res = '1';
		}
		if(	res != '-1' ){
			loadFile( function(response) {
				_this.data[_this.response.tree[_this.counter].path] = JSON.parse(response).content;
				_this.next_call(filter);
			}, this.response.tree[this.counter].url); 
		}else{
			this.next_call(filter);
		}
	},
	next_call: function(filter){
		this. counter++;
		if(this.counter != this.response.tree.length){
			_GITHUB.load(filter);
		}else{
			console.log('--LOADED DATA--');
			console.log(this.data);
		}
	}
}

_GITHUB.get_list('relu-org/ArthurWellesleyCSSconcept/','master','README');

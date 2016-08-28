class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pic: {title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw', rating: 1},
			picList: [{title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw', rating: 1},
								{title: 'pic2', url: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg', rating: 3}]
		};
	}

	handleListClick(pic) {
		this.setState({
			pic: pic
		});
	}

	getPicsFromServer() {
		var context = this;
		$.ajax({
			'method': 'GET',
			'url': 'localhost:3000/pics',
			'content-type': 'application/json',
			'success': ( data => {
				context.setState({
					picList: data.results.picList,
					pic: this.picList[0]
				})
			}), 
			'error': ( error => {
				console.log(error);
			})
		});
	}

	render() {
		return (
			<div className='container-fluid'>
				<h1>Peep deez pics</h1>
				<div className='row mid-body'>

					<PicList picList={ this.state.picList } handleListClick={ this.handleListClick.bind(this) }/>
					<PicView pic={ this.state.pic } />
				</div>	
			</div>
		);
	}

}

function getPics(){

};
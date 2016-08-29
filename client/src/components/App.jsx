class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			picList: [{title: null, url: null, rating: null}], 
			pic: {title: null, url: null, rating: null}
		};
	}

	componentDidMount() {
    this.getPicsFromServer();
  }

	handleListClick(pic) {
		this.setState({
			pic: pic
		});
	}

	getPicsFromServer() {
		console.log("GET PICS");
		var context = this;
		$.ajax({
			'method': 'GET',
			'url': 'http://localhost:3000/pics',
			'content-type': 'application/json',
			'success': ( data => {
				console.log("SUCCESS");
				context.setState({
					picList: data.results,
					pic: data.results[0]
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
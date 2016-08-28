class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pic: {title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw'},
			picList: [{title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw'}]
		};
	}

	render() {
		return (
			<div className='container-fluid'>
				<h1>Peep deez pics</h1>
				<div className='row'>
					<PicList picList={ this.state.picList } />
					<PicView pic={ this.state.pic } />
				</div>	
			</div>
		);
	}

}
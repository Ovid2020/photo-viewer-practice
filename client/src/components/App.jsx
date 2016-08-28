class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pic: {title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw'};
			picList: [{title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw'}]
		};
	}

	render() {
		return (
			<div class='container-fluid'>
				<title>Peep deez pics</title>
				<div class='row'>
					<div class='col-md-4-offset-2'>
						<PicList pic={ this.state.picList }/>
					</div>
					<div class='col-md-4-offset-1'>
						<PicView pic={ this.state.pic } />
					<div>
			</div>

		);
	}

}
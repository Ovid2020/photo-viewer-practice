var PicList = props => (
	<div className='col-md-4 col-md-offset-2' >
		{props.picList.map( pic => 
			<PicListEntry pic={ pic } />
		)}
	</div>
);

window.PicList = PicList;
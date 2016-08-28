var PicList = props => (
	
	{props.picList.map( pic => 
		<PicListEntry pic={ pic } />
	)}

);

window.PicList = PicList;
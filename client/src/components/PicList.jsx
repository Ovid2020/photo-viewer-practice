var PicList = props => (
	
	{props.picData.map( pic => 
		<PicListEntry pic = {pic} />
	)}

);

window.PicList = PicList;
var PicListEntry = props => (
	<div className='picEntry' onClick={ ()=>{ props.onclick(props.pic) } }>
		<span className='picTitle'>{props.pic.title}</span>
	</div>
);

window.PicListEntry = PicListEntry;
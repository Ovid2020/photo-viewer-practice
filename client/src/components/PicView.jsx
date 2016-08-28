var PicView = props => (
	<div className='col-md-3 col-md-offset-3'>
		<img className='picImage' src={ props.pic.url }/>
		<span>{ props.pic.title + ' '}</span> <span>{ props.pic.rating + ' ' } </span> out of 5
	</div>
);

window.PicView = PicView;
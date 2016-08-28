var PicView = props => (
	<div className='col-md-3 col-md-offset-3'>
		<img className='picImage' src={ props.pic.url }/>
	</div>
);

window.PicView = PicView;
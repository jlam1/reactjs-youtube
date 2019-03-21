import React from 'react';
import { Button, Image, Icon, Divider } from 'semantic-ui-react';
import './VideoInfoBox.scss';

class VideoInfoBox extends React.Component {
	constructor(props) {
		super();
		this.state = {
			collapsed: true
		};
	}

	onToggleCollpaseButtonClick = () => {
		this.setState((state, props) => ({
			collapsed: !state.collapsed
		}));
	}

	render() {
		let descriptionTextCase = 'collapsed';
		let buttonTitle = 'SHOW MORE';

		if(!this.state.collapsed) {
			descriptionTextCase = 'expanded';
			buttonTitle = 'SHOW LESS';
		}

		return (
			<div className='box-container'>
				<div className='video-info-box'>
					<Image className='channel-image' src='http://via.placeholder.com/48x48' circular/>
					<div className="video-info">
						<div className='channel-name'>Channel Name</div>
						<div className='video-publication-date'>Thu 24, 2017</div>
					</div>
					<Button color='youtube' icon labelPosition='left'>
						<Icon name='play'></Icon>
						91.5K Subscribe
					</Button>
					<div className="video-description">
						<div className={descriptionTextCase}>
							<p>Paragraph 1</p>
							<p>Paragraph 2</p>
							<p>Paragraph 3</p>
							<p>Paragraph 4</p>
							<p>Paragraph 5</p>
						</div>
					</div>
				</div>
				<Divider horizontal>
					<Button compact className='collapseButton' onClick={this.onToggleCollpaseButtonClick}>{buttonTitle}</Button>
				</Divider>
			</div>
		);
	}
}

export default VideoInfoBox;
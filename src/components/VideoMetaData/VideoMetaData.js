import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Rating } from 'components/Rating/Rating';
import './VideoMetaData.scss';

export function VideoMetaData(props) {
	const viewCount = Number(props.viewCount).toLocaleString() || '';

	return (
		<div className='video-metadata box-container'>
		  <h3>Video title</h3>
		  <div className='video-stats'>
				<span>{viewCount} views</span>
				<div className='video-actions' >
					<Rating likeCount={2500} dislikeCount={500} />
					<Button basic icon labelPosition='left'>
						<Icon name='share'/>
					Share
					</Button>
					<Button basic icon>
						<Icon name='add circle' />
					</Button>
					<Button basic icon>
						<Icon name='ellipsis horizontal' />
					</Button>
				</div>
		  </div>
		</div>
	  );
}
import React from 'react';
import VideoPreview from 'components/VideoPreview/VideoPreview';
import { NextUpVideo } from 'components/RelatedVideos/NextUpVideo/NextUpVideo';
import './RelatedVideos.scss';

export function RelatedVideos(props) {
	return (
		<React.Fragment>
			<div className='related-videos box-container'>
				<NextUpVideo/>
				<VideoPreview horizontal={true} />
				<VideoPreview horizontal={true} />
				<VideoPreview horizontal={true} />
			</div>
		</React.Fragment>
	);
}

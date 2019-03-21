import React from 'react';
import './Watch.scss';
import { RelatedVideos } from 'components/RelatedVideos/RelatedVideos';
import { Video } from 'containers/Watch/Video/Video';
import { VideoMetaData } from 'components/VideoMetaData/VideoMetaData';
import VideoInfoBox from 'components/VideoInfoBox/VideoInfoBox';
import Comments from 'containers/Comments/Comments';

class Watch extends React.Component {
	render() {
		return (
			<div className='watch-grid'>
				<Video className='video' id='-7fuHEEmEjs' />
				<VideoMetaData className='metadata' viewCount={10} />
				<VideoInfoBox className='video-info-box' />
				<Comments className='comments' />
				<RelatedVideos className='relatedVideos'/>
			</div>
		);
	}
}

export default Watch;
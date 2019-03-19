import React from 'react';
import VideoPreview from 'components/VideoPreview/VideoPreview';
import { VideoGridHeader } from 'components/VideoGrid/VideoGridHeader/VideoGridHeader';
import './VideoGrid.scss';
import { Divider } from 'semantic-ui-react';

export function VideoGrid(props) {
	const divider = props.hideDivider ? null : <Divider />;
	return (
		<React.Fragment>
			<VideoGridHeader title={props.title} />
			<div className='video-grid'>
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
			</div>
			{divider}
		</React.Fragment>
	);
}
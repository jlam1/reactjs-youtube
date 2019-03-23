import React from 'react';
import { VideoGrid } from 'components/VideoGrid/VideoGrid';
import SideBar from 'containers/SideBar/SideBar';
import './Home.scss';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SideBar />
				<div className='home'>
					<div className='responsive-video-grid-container box-container'>
						<VideoGrid title='Trending'/>
						<VideoGrid title='Auto & Vehicles' hideDivider={true}/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
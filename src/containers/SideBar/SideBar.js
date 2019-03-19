import React from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import { SideBarItem } from './SideBarItem/SideBarItem';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';
import Subscriptions from './Subscriptions/Subscriptions';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';
import './SideBar.scss';

class SideBar extends React.Component {
	render() {
		return (
			<Menu borderless vertical stackable fixed='left' className='side-nav'>
				<SideBarItem highlight={true} label='Home' icon='home' />
				<SideBarItem label='Trending' icon='fire' />
				<SideBarItem label='Followers' icon='spy' />
				<Divider />

				<SideBarHeader title='Library' />
				<SideBarItem label='History' icon='history' />
				<SideBarItem label='Watch Later' icon='clock' />
				<SideBarItem label='Liked Videos' icon='thumbs up' />
				<Divider />

				<SideBarHeader title='Subscriptions' />
				<Subscriptions />
				<Divider />

				<SideBarHeader title='More From Youtube' />
				<SideBarItem label='Movies and Shows' icon='film' />
				<SideBarItem label='Report History' icon='flag' />
				<SideBarItem label='Help' icon='help circle' />
				<SideBarItem label='Send Feedback' icon='comment' />
				<Divider />

				<SideBarFooter />
			</Menu>
		);
	}
}

export default SideBar;
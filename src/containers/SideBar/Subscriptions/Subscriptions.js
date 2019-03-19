import React from 'react';
import { Subscription } from './Subscription/Subscription';

class Subscriptions extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Subscription label='Academind' broadcasting />
				<Subscription label='ColdFusion' amountNewVideos={3} />
				<Subscription label='Great Big Story' broadcasting amountNewVideos={10}/>
				<Subscription label='videogamedunkey' amountNewVideos={1}/>
				<Subscription label='PictureFit' />
				<Subscription label='Android Authority' amountNewVideos={2}/>
				<Subscription label='Nintendo' />
			</React.Fragment>
		);
	}
}

export default Subscriptions;
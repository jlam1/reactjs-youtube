import React from 'react';
import {shallow} from 'enzyme';
import Subscriptions from '../Subscriptions';

describe('Subscriptions', () => {

	test('Renders', () => {
		const wrapper = shallow(
		  <Subscriptions />
		);
		expect(wrapper).toMatchSnapshot();
	  });

});
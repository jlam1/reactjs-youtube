import React from 'react';
import {shallow} from 'enzyme';
import {Subscription} from '../Subscription';

describe('Subscription', () => {

	test('Renders empty Subscription', () => {
		const wrapper = shallow(
		  <Subscription />
		);
		expect(wrapper).toMatchSnapshot();
	  });
	
	  test('Renders broadcasting Subscription', () => {
		const wrapper = shallow(
		  <Subscription broadcasting label='Subscription Label'/>
		);
		expect(wrapper).toMatchSnapshot();
	  });
	
	  test('Render non-broadcasting Subscription with new videos', () => {
		const wrapper = shallow(
		  <Subscription label='Subscription Label' amountNewVideos={2}/>
		);
		expect(wrapper).toMatchSnapshot();
	  });

});
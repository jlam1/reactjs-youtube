import React from 'react';
import {shallow} from 'enzyme';
import {SideBarHeader} from '../SideBarHeader';

describe('SideBarHeader', () => {

	test('Renders SideBarHeader with props.title=null', () => {
		const wrapper = shallow(
		  <SideBarHeader />
		);
		expect(wrapper).toMatchSnapshot();
	  });
	
	  test('Renders SideBarHeader with propr.title=\'\'', () => {
		const wrapper = shallow(
		  <SideBarHeader title=''/>
		);
		expect(wrapper).toMatchSnapshot();
	  });
	
	  test('Render SideBarHeader with Sample Title', () => {
		const wrapper = shallow(
		  <SideBarHeader title='Sample Title'/>
		);
		expect(wrapper).toMatchSnapshot();
	  });

});
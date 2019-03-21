import { VideoInfoBox } from '../VideoInfoBox';
import {shallow} from 'enzyme';
import React from 'react';

describe('VideoInfoBox', () => {
	test('Renders collapsed', () => {
		const wrapper = shallow(<VideoInfoBox />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Renders expanded', () => {
		const wrapper = shallow(<VideoInfoBox />);
		wrapper.setState({collapsed: false});
		expect(wrapper).toMatchSnapshot();
	});
});
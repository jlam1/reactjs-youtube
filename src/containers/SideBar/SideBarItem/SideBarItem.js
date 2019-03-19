import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './SideBarItem.scss';

export function SideBarItem(props) {
	// console.log(props);
	console.log("\n");
	const highlight = props.highlight ? 'highlight-item' : null;
	return (
		<Menu.Item className={['sidebar-item', highlight].join(' ')}>
			<div className='sidebar-item-alignment-container'>
				<span><Icon size='large' name={props.icon} /></span>
				<span>{props.label}</span>
			</div>
		</Menu.Item>
	);
}
import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
		<React.Fragment>
			<header>
				<nav>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
		</React.Fragment>
    )
  }
  
}

export default Header;
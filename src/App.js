import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppLayout } from 'components/AppLayout/AppLayout';
import Home from 'containers/Home/Home';
import Watch from 'containers/Watch/Watch';
import API_KEY from 'config/keys';

class App extends Component {

  componentDidMount() {
    console.log('API_KEY = ' + API_KEY.YOUTUBE_API_KEY);
  }

	render() {
		return (
			<AppLayout>
				<Switch>
					<Route path='/watch' component={Watch}/>
					<Route path='/' component={Home}/>
				</Switch>
			</AppLayout>
		);
	}
}

export default App;
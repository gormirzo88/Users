import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import ErrorRoute from '../Error/Error';
import ServerList from "../ServerList/ServerList";
import DetailInfoContainer from "../DetailInfoContainer";

class App extends Component {
    render() {
        return (
            <ReduxProvider store={this.props.store}>
                <Router>
                    <Switch>
                        <Route path="/users" component={ServerList} exact />
                        <Route path="/users/:name" component={DetailInfoContainer} exact />

                        <Route path="/repos" component={ServerList} exact />
                        <Route path="/repos/:name/:login" component={DetailInfoContainer} exact />

                        <Route component={ErrorRoute} />
                    </Switch>
                </Router>
            </ReduxProvider>

        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


import ErrorBoundry from './components/errorBoundry'
import { SimpleBlogProvider } from './components/simpleBlogServiceContext';
import SimpleBlogService from './services/simpleBlogService'
import store from './store'

const simpleBlogService = new SimpleBlogService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <SimpleBlogProvider value={simpleBlogService} >
                <Router>
                    <App />
                </Router>
            </SimpleBlogProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);


import React, { Fragment } from 'react';

import PostsList from '../postsList';
import BlogNavigation from '../blogNavigation'
import PostDetails from '../postDetails'
import Form from '../form'

import { Switch, Route } from 'react-router-dom'

const App = () => {

  

  return (
    <div >
      <h1> Blog </h1>
      <BlogNavigation />
      <Switch>
        <Route path={'/posts/'} exact render={() =>
          <Fragment >
            <PostsList />
            <Form />
          </Fragment>
        } />
        <Route path="/posts/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <PostDetails itemId={id} />
          }} />

      </Switch>
    </div>
  );
}

export default App;

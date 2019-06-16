import React from 'react';
import { SimpleBlogConsumer } from '../simpleBlogServiceContext';

const withSimpleBlogService = () => (Wrapped) => {

  return (props) => {
    return (
      <SimpleBlogConsumer>
        {
          (simpleBlogService) => {
            return (<Wrapped {...props}
              simpleBlogService={simpleBlogService}/>);
          }
        }
      </SimpleBlogConsumer>
    );
  }
};

export default withSimpleBlogService;

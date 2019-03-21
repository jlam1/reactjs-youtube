import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import './CommentsHeader.scss';

const CommentsHeader = (props) => (
    <div className='comments-header'>
      <h4>{props.amountComments} Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
    </div>
)

export default CommentsHeader;
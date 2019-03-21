import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import './Comments.scss';
import Comment from "containers/Comments/Comment/Comment";
import CommentsHeader from "containers/Comments/CommentsHeader/CommentsHeader";
import AddComment from "containers/Comments/AddComment/AddComment";

class Comments extends React.Component {
	render() {
		return (
			<div className='box-container'>
				<CommentsHeader amountComments={this.props.amountComments}/>
				<AddComment/>
				<Divider />
				<Comment/>
				<Comment/>
				<Comment/>
			</div>
		);
	}
}

export default Comments;
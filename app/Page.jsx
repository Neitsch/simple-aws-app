import React from 'react';

class CommentBox extends React.Component {
  render() {
    return <div className="commentBox">
        {this.props.title}
      </div>
  }
}

export default CommentBox;

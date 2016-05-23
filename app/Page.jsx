import React from 'react';

class CommentBox extends React.Component {
  render() {
    return <div className="commentBox">
        Hello, {this.props.name}
      </div>
  }
}

export default CommentBox;

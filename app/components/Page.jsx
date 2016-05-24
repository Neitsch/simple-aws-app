import React from 'react';

class CommentBox extends React.Component {
  render() {
    if (!this.props.name) {
      return null;
    }
    return (
      <div className="commentBox">
        Hello, {this.props.name}
      </div>);
  }
}
CommentBox.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default CommentBox;

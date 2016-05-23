import React from 'react';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        {this.props.title}
      </div>
    );
  }
});

module.exports = CommentBox;

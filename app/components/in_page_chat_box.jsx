var React  = require('react');
var ChatBoxHead = require('./chat_box_head.jsx');
var InPageChatBox = React.createClass({

  render: function() {
    var chatStyle = {};
    if(this.props.mobile){
      chatStyle = {
        backgroundColor: 'yellow',
        height: '1000px',
        width: '500px'
      }
    }

    return (
      <div id="chatyuk" style= {chatStyle}>
       <ChatBoxHead ref="chatBoxHead"/>
        <div className="chat-body" >
         <div className="chat-area">
           {this.props.children}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = InPageChatBox;


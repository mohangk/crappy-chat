var React = require('react');
var XmppComms = require('./comms.js');
var ChatArea = require('./components/chat_area.jsx');

var comms = Object.create(XmppComms);

var MobileDetect = require('mobile-detect');
var Chatyuk = {
  isMobile: function() {
    return new MobileDetect(window.navigator.userAgent).mobile() !== null;
  },

  defaultConfig: {
    display_mode: 'inpage'
  },

  init: function(parentEl, config) {
    this.initConfig(config);
    this.renderComponent(parentEl);
  },

  initConfig: function(customConfig) {
    this.config = Object.create(this.defaultConfig);
    for (var attrname in customConfig) { 
      this.config[attrname] = customConfig[attrname]; 
    }
  },

  renderComponent: function(parentEl) {
    React.render(
      <ChatArea comms={comms} config={this.config} mobile={this.isMobile()} />,
      parentEl
    );
  }
}

window.Chatyuk = Chatyuk;

module.exports = Chatyuk;


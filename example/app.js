/** @jsx React.DOM */
var React = require('react');
var Editor = require('react-avatar-editor');

function createEditor(width, height, border) {
    return React.createElement(React.createClass({

        getInitialState: function() {
            return {
                scale: 1,
                preview: null
            };
        },

        componentDidMount: function() {
        },

        handleSave: function(data) {
            var img = this.refs.avatar.getImage();
            this.setState({preview: img});
        },

        handleScale: function() {
            var scale = this.refs.scale.getDOMNode().value;
            this.setState({scale: scale})
        },

        render: function() {
            return <div>
                <Editor ref="avatar" rotation={this.state.rotation} scale={this.state.scale} onSave={this.handleSave} image="example.jpg" />
                <input type="range" ref="scale" onChange={this.handleScale} min="1" max="2" step="0.01" defaultValue="1" />
                <input type="button" onClick={this.handleSave} value="Preview" />
                <img src={this.state.preview} />
            </div>
        }

    }));
}

React.render(createEditor(250, 250, 25), document.getElementById('example1'));

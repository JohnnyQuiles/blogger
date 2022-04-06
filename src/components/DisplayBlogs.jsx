import React, { Component } from 'react';

export default class DisplayBlogs extends Component {
    render() {
        return (
            <div className="BlogsPosts">
                <h3>Blogs:</h3>
                <div className="CreatedAt" onChange={this.handleCreateAt}>Created-At:{this.props.createdAt}</div>
                <div className="Title" onChange={this.handleTitle}>Title:{this.props.title}</div>
                <div className="Text" onChange={this.handleText}>Text:{this.props.text}</div>
                <div className="Id" onChange={this.handleId}>Id:{this.props.id}</div>
            </div>
        );
    };
}; 
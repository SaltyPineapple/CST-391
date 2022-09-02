import React from "react";
import './post.css';

class Post extends React.Component {
    state = {}
    
    handleDelete = () => {
        console.log("delete: ", this.props.id);
        this.props.onClick(this.props.id);
    }

    render () {
        return (
            <div className="postContainer">
                <span>Blog Entry # {this.props.id}</span>
                <p>{this.props.text}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Post;
import React from "react";
import './post.css'

class AddPost extends React.Component {
    state = {
        text: "",
    }

    updateState = (event) => {
        this.setState( {text: event.target.value });
    }

    handleAdd = () => {
        console.log("New Post: ", this.state.text);
        this.props.onClick(this.state.text);
    }

    render() {
        return (
            <div className="postContainer">
                <textarea onChange= {this.updateState} type="text" value={this.state.text} />
                <br />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

}

export default AddPost;
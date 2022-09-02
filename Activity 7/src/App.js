import React from 'react';
import AddPost from './AddPost';
import Post from './Post';

class App extends React.Component {
  state = {
    postCount: 4,
    posts: [
      {
        postNumber: 1,
        text: "This is a post. Yay"
      },
      {
        postNumber: 2,
        text: "This is a post. Yay"
      },
      {
        postNumber: 3,
        text: "This is a post. Yay"
      },
    ]
  }

  deletePost = (toBeDeleted) => {
    console.log("Current post list: ", this.state.posts);

    var postToDelete = this.state.posts.filter((post) => {
      console.log(post.postNumber, toBeDeleted);
      return post.postNumber === toBeDeleted;
    });
    
    console.log("Deleting post: ", postToDelete);

    this.setState({posts: this.state.posts.filter( 
      (post) => {return post !== postToDelete[0]})
    });
  }

  addPost = (text) => {
    console.log("Creating new post with text: ", text);
    this.setState( {postCount : this.state.postCount + 1});
    var newPost = {
      postNumber: this.state.postCount,
      text: text
    }
    var newArray = this.state.posts.concat(newPost);
    this.setState( {posts: newArray});
  }

  render() {
    const posts = this.state.posts.map(post =>
      <Post onClick={this.deletePost} id = {post.postNumber} text = {post.text} />  
    )
    return (
      <div>
        <AddPost onClick = {this.addPost}/>
        {posts}
      </div>
    );
  }
}

export default App;

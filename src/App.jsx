import React, { Component } from 'react';
const mockApi = 'https://6239ddb128bcd99f02763cfe.mockapi.io/blogs'; 

async function allBlogs (blog) {
  const response = await fetch(`${mockApi}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },
    body: JSON.stringify({
      blog
    })
  });
  const fetchRes = await response.text();
  console.log("fetchRes:", fetchRes);
  return fetchRes;
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      id: ""
    }
  }
  handleBlog = (event) => {
    this.setState({id: event.target.value })
  }
  getAllBlogs = async () => {
    const showBlogRes = await allBlogs(this.state)
    console.log("blogs", showBlogRes);
  }
  render() {
    return (
      <div className="App">
        <h1>Blogger</h1>
        <br />

        <label>Blogs:</label>
        
        <button onClick={this.getAllBlogs}></button>
        </div>
    )
  }
}

export default App;

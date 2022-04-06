import React, { Component } from 'react';
import DisplayBlogs from './components/DisplayBlogs';

const mockApi = 'https://6239ddb128bcd99f02763cfe.mockapi.io/blogs';

async function allBlogs() {
  const response = await fetch(`${mockApi}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },
  });
  // console.log("RESPONSE:", response);
  const fetchRes = await response.json();
  console.log("fetchRes:", fetchRes);
  return fetchRes;
}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: "",
      title: "",
      text: "",
      id: ""
    }
  }
  handleCreateAt = (event) => {
    this.setState({ createdAt: event.target.value });
  }
  handleTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  handleText = (event) => {
    this.setState({ text: event.target.value })
  }
  handleId = (event) => {
    this.setState({ id: event.target.value })
  }
  getAllBlogs = async () => {
    const showBlogRes = await allBlogs()
    console.log("blogs", showBlogRes);
  }
  render() {
    const { createdAt, title, text, id} = this.state;
    return (
      <div className="App">
        <h1>Blogger</h1>
        <br />
        <div className="BlogDisplays">
          <DisplayBlogs
            createdAt={createdAt}
            title={title}
            text={text}
            id={id}
          />

          {/* <p name="title" value={title} onChange={this.handleTitle}></p>
        <br />

        <p name='text' value={text} onChange={this.handleText}></p>
        <br />

        <p name="id" value={id} onChange={this.handleId}></p>
        <br /> */}

          <button onClick={this.getAllBlogs}>Get Blogs</button>
        </div>
      </div>

    )
  }
}

export default App;

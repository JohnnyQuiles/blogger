import { useState, useEffect } from 'react';
import DisplayBlogs from './components/DisplayBlogs';

function App() {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]); 

  useEffect(() =>{
    const fetchData = async() => {
      const data = await fetch(`https://6239ddb128bcd99f02763cfe.mockapi.io/blogs?limit=${limit}&page=${page}`);
      const json = await data.json();
      console.log('json:', json);
      setBlogs(json);
      return json;
    };
    fetchData();
  }, [limit, page]); 
    return (
      <div className="App">
        <h1>Blogger</h1>
        <br />
        <DisplayBlogs 
        blogs = {blogs}
        limit = {limit}
        page = {page}
        setLimit = {setLimit}
        setPage = {setPage}
        />
        {blogs.map((blog) => {
          return (
            <div>
              <div>
                <h1>{blog.author}</h1>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
export default App;

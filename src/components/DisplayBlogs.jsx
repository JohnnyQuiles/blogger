export default function DisplayBlogs(props) {
    return (
        <div className="BlogsPosts">
            Limit: {props.limit} Page: {props.page} Blogs length: {props.blogs.length}
            <input type="number" value={props.limit} onChange={(e) => { props.setLimit(e.target.value); }} />
            <input type="number" value={props.page} onChange={(e) => { props.setPage(e.target.value); }} />
            
        </div>
    );
};
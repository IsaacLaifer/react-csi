import { Component } from "react";
import './blog-list.styles.scss';

class BlogList extends Component{
    render(){   

        const{ blogs } = this.props;
        
        return(
            <div className="blog-list">
                {blogs.map(blog => {
                    const { idBlog, titleBlog, textBlog} = blog;
                    return (
                   <div className="blog-container" key={idBlog}>
                    <h1>{titleBlog}</h1>
                    <p>{textBlog}</p>
                   </div>
                )})}
            </div>
        )
    }
}

export default BlogList;
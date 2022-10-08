import { Component } from "react";
import BlogList from "../../components/blog-list/blog-list.component";
import SearchBox from "../../components/search-box/search-box.component";

import './list.styles.scss'

class List extends Component {
    constructor() {
        super();

        this.state = {
            blogs: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/controller/getAllBlogs.php')
            .then((response) => response.json())
            .then((list) => this.setState(
                () => {
                    return { blogs: list }
                }))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField };
        })
    }

    render() {

        const { blogs, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredBlog = blogs.filter((blog) => {
            return blog.titleBlog.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="listBody">
                <SearchBox onChangeHandler={onSearchChange} placeholder='search blog' className='searchBox'/>
                <BlogList blogs={filteredBlog} />
            </div>
        )

    }
}

export default List;
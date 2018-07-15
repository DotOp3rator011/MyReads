import React from 'react'
import '../CSS/Search.css'
import {search} from '../../BooksAPI.js'
import {NavLink} from 'react-router-dom'
import BookGrid from './BookGrid.js'


export default class Search extends React.Component {

    constructor() {
        super();
        this.searchBooks = this.searchBooks.bind(this)
        this.state = {
            books: [],
            message: 'Enter text to search',
            existing: []
        };
    }

    componentDidMount() {
        this.props.updateBooks();
    }

    searchBooks(event) {
        if(event.target.value === "")
            this.setState({books: [], message: 'Enter text to search'})
        else {
            search(event.target.value)
            .then((response) => {
                response.forEach((bookInResponse) => {
                    this.props.bookList.forEach((bookInList) => {
                        if(bookInResponse.id === bookInList.id) {
                            bookInResponse.shelf = (bookInList.shelf) ? (bookInList.shelf) : 'none'
                        }
                    }) 
                })
                this.setState({
                    books:response,
                    message: 'Found ' + response.length + ' Books'
                });            
            })
            .catch(() => {
                this.setState({books: [], message: 'No books found'})
            })
        }
    }

    render() {
        const element = <div className="search-books">
                            <div className="search-books-bar">
                                <NavLink to='/' className='close-search'></NavLink>
                                <div className="search-books-input-wrapper">
                                    <input type="text" onKeyUp={this.searchBooks} 
                                    placeholder="Search by title or author"/>
                                </div>
                            </div>
                            <div className="search-books-results">
                                <div className="search-message">{this.state.message}</div>
                                <BookGrid bookList={this.state.books}/>
                            </div>
                        </div>
        return element
    }
}
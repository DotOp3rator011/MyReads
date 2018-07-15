import React from 'react'
import '../CSS/BookGrid.css'
import Book from './Book.js'


export default class BookGrid extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
        this.addBooks = this.addBooks.bind(this)
    }

    addBooks(bookList) {
        let books = [];
        if(bookList.length > 0) {
            bookList.forEach((book) => {
                book.shelf = (book.shelf) ? (book.shelf) : 'none'
                book.authors = (book.authors) ? (book.authors) : ['Unknown']
                book.imageLinks = (book.imageLinks) ? (book.imageLinks) : ({thumbnail: null})
                books.push(<li key={book.id}><Book book={book} 
                    updateBooks={this.props.updateBooks}/></li>)
            });
        }
        this.setState({books:books})
    }

    componentWillReceiveProps(nextProps) {  
        this.addBooks(nextProps.bookList)
    }

    componentDidMount() {
        this.addBooks(this.props.bookList)
    }

    render() {
        const element = <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books}
                            </ol>
                        </div>
        return element;
    }
}
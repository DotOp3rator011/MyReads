import React from 'react'
import {NavLink} from 'react-router-dom'
import '../CSS/Book.css'
import BookShelfChanger from './BookShelfChanger.js'


export default class Book extends React.Component {
    
    render() {
        const element =<div className="book">
                            <div className="book-top">
                                <NavLink to={`/details/${this.props.book.id}`}>
                                    <div className="book-cover" style={{height:193, width: 128, backgroundImage: 'url("'+ this.props.book.imageLinks.thumbnail +'")'}}></div>
                                </NavLink>
                                <BookShelfChanger book={this.props.book} updateBooks={this.props.updateBooks}/>
                            </div>
                            <div className="book-title">{this.props.book.title}</div>
                            <div className="book-authors">{this.props.book.authors[0]}</div>
                        </div>
    return element;
  }
}
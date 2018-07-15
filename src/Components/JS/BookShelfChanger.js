import React from 'react'
import {update} from '../../BooksAPI.js'
import '../CSS/BookShelfChanger.css'


export default class extends React.Component {
    
    moveToShelf(event) {
        update(this.props.book, event.target.value)
        .then(() => {this.props.updateBooks()})
        .catch((err) => {})
    }

    render() {
        const element = <div className="book-shelf-changer">
                            <select onChange={this.moveToShelf.bind(this)} value={this.props.book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
        return element
    }
}
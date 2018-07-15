import React from 'react'
import '../CSS/Shelf.css'
import BookGrid from './BookGrid.js'


export default class Shelf extends React.Component {

    constructor() {
        super();
        this.filterBookList = this.filterBookList.bind(this)
    }

    filterBookList() {
        return this.props.bookList.filter((book) => {
            return book.shelf === this.props.id
        })
    }
    
    render() {
        const element = <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{this.props.title}</h2> 
                                <BookGrid bookList={this.filterBookList()} 
                                updateBooks={this.props.updateBooks}/>
                            </div>
                        </div>
        return element
    }
}
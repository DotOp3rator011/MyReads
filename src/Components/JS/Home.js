import React from 'react'
import '../CSS/Home.css'
import Header from './Header.js'
import Shelf from './Shelf.js'
import OpenSearch from './OpenSearch.js'


export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            currentlyReading: {title: 'Currently Reading', id:'currentlyReading'},
            wantToRead: {title: 'Want To Read', id:'wantToRead'},
            read: {title: 'Read', id:'read'}
        }
    }

    componentDidMount() {
        this.props.updateBooks()
    }

    render() {
        const element = <div className="list-books">
                            <Header />
                            <div className='list-books-content'>
                                {Object.keys(this.state).map((shelf) => {
                                    return <Shelf key={this.state[shelf].id}
                                    title={this.state[shelf].title}
                                    id={this.state[shelf].id}
                                    bookList={this.props.bookList} 
                                    updateBooks={this.props.updateBooks} />
                                })}
                            </div>
                            <OpenSearch/>
                        </div>                        
        return element
    }
}

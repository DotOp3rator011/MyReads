import React from 'react'
import '../CSS/App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import Search from './Search.js'
import BookDetails from './BookDetails.js'
import {getAll} from '../../BooksAPI.js'


export default class App extends React.Component {

	constructor(props) {
        super(props);
        this.addBooks = this.addBooks.bind(this)
        this.state ={books: [], book: null}
    }

    addBooks() {
    	getAll()
    	.then(books => {
            this.setState({books: books});
        });
    }

	componentDidMount() {
		this.addBooks();
    }
    
    render() {
        const element = <BrowserRouter>
                            <Switch>
                                <Route path='/' exact render={({ history }) => (
                                	<Home bookList={this.state.books} updateBooks={this.addBooks}/>
                                	)}/>
                                <Route path='/search' exact render={({ history }) => (
                                	<Search bookList={this.state.books} updateBooks={this.addBooks}/>
                				)}/>
                				<Route path='/details/:id' exact component={BookDetails}/>
                            </Switch>
                        </BrowserRouter>
        return element;                       
    }
}

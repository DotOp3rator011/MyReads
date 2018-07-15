import React from 'react'
import {get} from '../../BooksAPI.js'
import '../CSS/BookDetails.css'


export default class BookDetails extends React.Component {

	constructor() {
		super();
		this.state = {
			book: {},
		}
	}

	componentDidMount() {
		this.getBookDetails()
	}

	getBookDetails() {
		get(this.props.match.params.id)
		.then((response) => {
			this.setState({
				book: response
			})
		})
	}


	render() {
		let url = (this.state.book.imageLinks) ? (this.state.book.imageLinks.thumbnail) : (null)
		const element = <div className='book-detail'>
							<div className="book-cover" style={{height:280, width: 174, 
								 backgroundImage: 'url("'+ url +'")',}}></div>
							<div className='detail-block'>
								<h3>{this.state.book.title}</h3>
							</div>
							<div className='detail-block'>
								<h4>Description</h4>
								<p>{this.state.book.description}</p>
							</div>
							<div className='detail-block-authors'>
								<p>Authors : {this.state.book.authors}</p>
							</div> 
						</div>
		return element
	}
}
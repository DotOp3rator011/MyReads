import React from 'react'
import '../CSS/OpenSearch.css'
import {NavLink} from 'react-router-dom'


export default class OpenSearch extends React.Component {
	render() {
		const element = <div className="open-search">
							<NavLink to='/Search'>Add a book</NavLink>
            			</div>
        return element
	}
}
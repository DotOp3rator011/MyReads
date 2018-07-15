import React from 'react'
import '../CSS/Header.css'


export default class Header extends React.Component { 
    render() {
        const element = <div className="list-books-title">
        					<h1>MyReads</h1>
        				</div>
        return element
    }
}
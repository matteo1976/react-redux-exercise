import React, { Component } from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux'; // finzione per controllare l'azione

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                // in react 
                // quando si ha una lista di elementi in questo caso book.title
                // di usare key per dare un valore unico al tag li
                <li 
                    key = {book.title}  
                    onClick={()=>this.props.selectBook(book)}
                    className = "list-group-item" > 
                    {book.title}
                 </li>
            );
        });
    }
    render() {
        //console.log(this.props.afdk) =>1234  *** questo e' stato inserito nella funzione mapStateToProps
        return ( 
            <ul className = "list-group col-sm-4" > 
                {this.renderList()}
            </ul>
        )
    }
};

function mapStateToProps(state) {
    // tutto quello che questa funzione restituisce
    // sara visto come una proprieta in props
    return { // NB... deve tornare un oggetto
        //afdk:'1234' ****** controlla il console.log in render
        books: state.books
    };

}
// esattamente come per mapStateToProps solo che questa funzione e' per le action 
// tutto quello che torna da questa funzione andra' sul props di bookList container
function mapDispatchToPrps(dispatch){
    // ovunque selectBook e' chiamata, il risultato sara' passato
    // a tutti i reducers
    return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToPrps)(BookList);
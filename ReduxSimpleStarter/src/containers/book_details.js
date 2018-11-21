import React,{Component} from 'react';
import {connect} from'react-redux';

class BookDetails extends Component{
    render(){
        if (!this.props.book){
            return <div> select book </div>
        }
        return(
            <div>
                <h3> details for:</h3>
                <div> Title: {this.props.book.title}</div>
                <div> Pages: {this.props.book.pages}</div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    // tutto quello che questa funzione restituisce
    // sara visto come una proprieta in props
    return { // NB... deve tornare un oggetto
    
        book: state.activeBook // activeBooks e' la proprieta o key che abbiamo nello state globale.... guarda index.js del reducer
    };

}

export default connect(mapStateToProps)(BookDetails)
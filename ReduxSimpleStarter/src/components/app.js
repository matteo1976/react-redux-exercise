import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetails from '../containers/book_details'

export default class App extends Component {
  render() {
    return (
      <div>
        <div> <BookList /></div>
        <div> <BookDetails /></div>
      </div>

    );
  }
}

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          key={book.title}>
          {book.title}
        </li>

      )
    })
  }

  render() {
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props
  return {
    books: state.books
  }
}

//whatever returned will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // whenever select book is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//passes props to BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

export function selectBook(book) {
	//need to return action object with type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}
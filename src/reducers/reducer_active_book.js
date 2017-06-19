//state arg is not app state, only the state this reducer is responsible for

export default function (state = null, action) { // if state is undefined, set it to null
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}
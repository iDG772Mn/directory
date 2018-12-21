import { CHANGE_SEARCH_FIELD,
    REQUEST_PEOPLE_PENDING,
    REQUEST_PEOPLE_SUCCESS,
    REQUEST_PEOPLE_FAILED } from './constants';

const initialStateSearch = {
    searchField: ''
}

const initialStateDirectory = {
    isPending: false,
    directory: [],
    error: ''
}

export const searchDirectory = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload});
        default:
            return state;
    }
}

export const requestDirectory = (state=initialStateDirectory, action={}) => {
    switch(action.type) {
        case REQUEST_PEOPLE_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_PEOPLE_SUCCESS:
            let people = action.payload.results;
            let dir = [];
            for (let i = 0; i < people.length; i++) {
                let person = {  id: i,
                                picture: people[i].picture.large,
                                name: people[i].name.first + " " + people[i].name.last,
                                username: people[i].login.username,
                                email: people[i].email,
                                cell: people[i].cell };
                dir = dir.concat(person); }
            return Object.assign({}, state, { isPending: false, directory: dir });
        case REQUEST_PEOPLE_FAILED:
            return Object.assign({}, state, {isPending: false, error: action.payload });
        default:
            return state;
    }
}
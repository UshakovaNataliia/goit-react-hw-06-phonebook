import {FILTER_CONTACT} from './filterActionsTypes';

<<<<<<< Updated upstream
export const filter = createReducer('', {
    [filterInput]: (_, action) => action.payload, // _ - state не используется
});
=======
export const filter = (state = '', {type, payload}) => {
    switch (type) {
        case FILTER_CONTACT:
            return payload.filter;
        default:
            return state;
    }
};
>>>>>>> Stashed changes

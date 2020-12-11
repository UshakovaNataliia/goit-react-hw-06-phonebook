import {FILTER_CONTACT} from './filterActionsTypes';
//   state = {
//     filter: '',
//   };

export const filter = (state = '', {type, payload}) => {
    switch (type) {
        case FILTER_CONTACT:
            return payload.filter;
        default:
            return state;
    }
};

//   filterInput = filter => {
//     const { name, value } = filter.currentTarget;
//     return this.setState({
//       [name]: value,
//     });
//   };
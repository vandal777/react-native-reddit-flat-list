import {listConstants} from '../const/const'
import {quickSort} from '../utils/utils'

const flatList = (state = {}, action) => {
  switch (action.type) {
    case listConstants.GETLIST_REQUEST:
      return {
        loading: true
      };
    case listConstants.GETLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.items
      };
    case listConstants.GETLIST_FAILURE:
      return { 
        error: action.error
      };
    case listConstants.SORT_ITEMS:
      var sortedArray = quickSort(state.items, action.sortType).reverse();
      return {
        items: sortedArray
      };
    default:
      return state
  }
}

export default flatList;
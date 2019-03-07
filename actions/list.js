import { listConstants } from '../const/const'
import { listService } from '../services/list'

export const listActions = {
	getList,
	sortList,
};

function getList() {
	return dispatch => {
		dispatch(request());
		listService.getList()
			.then(
				items => dispatch(success(items)),
				error => dispatch(failure(error.toString()))
			);
	};

	function request() { return { type: listConstants.GETLIST_REQUEST } }
	function success(items) { return { type: listConstants.GETLIST_SUCCESS, items } }
	function failure(error) { return { type: listConstants.GETLIST_FAILURE, error } }
}

function sortList(sortType) {
	return dispatch => {
		dispatch(sortList(sortType));
	}
	function sortList(sortType) { return { type: listConstants.SORT_ITEMS, sortType } }
}
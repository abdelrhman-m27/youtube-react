import * as types from '../constants/ActionTypes';

export const setDateFilter = date => ({
    type: types.SET_DATE_FILTER,
    payload: date
});

export const setTypeFilter = type => ({
    type: types.SET_TYPE_FILTER,
    payload: type
});

export const setSortFilter = sort => ({
    type: types.SET_SORT_FILTER,
    payload: sort
});

export const setQuerySearch = query => ({
    type: types.SET_QUERY_SEARCH,
    payload: query
});



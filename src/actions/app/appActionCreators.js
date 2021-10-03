import {
    LOADING_FALSE,
    LOADING_TRUE
} from './appActionTypes';

export const appActionCreators = {
    loadingFalse: () => ({ type: LOADING_FALSE }),
    loadingTrue: () => ({ type: LOADING_TRUE })
};

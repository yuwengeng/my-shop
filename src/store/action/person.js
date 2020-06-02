import * as TYPES from '../action-types';
import {queryInfo} from '../../api/person';

let person = {
    queryBaseInfo() {
        return {
            type: TYPES.PERSON_QUERY_BASE,
            payload: queryInfo()
        }
    }
};
export default person;

// 异步网络请求可以引入redux-thunk  redux-devtools
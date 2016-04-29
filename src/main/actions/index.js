import * as ActionType from './const';

export function addSchool(school){
        return {
           school:school,
           type:ActionType.ADD_SCHOOL
        };
    }

export function deleteSchool(school){
        return {
           school:school,
           type:ActionType.DELETE_SCHOOL
        };
    }


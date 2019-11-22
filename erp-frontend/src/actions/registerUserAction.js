import {REGISTER_USER} from './types';

export const createUser = ()=> dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
        type:REGISTER_USER,
        payload:data
    }))
} 
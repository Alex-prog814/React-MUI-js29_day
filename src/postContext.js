import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

export const postsContext = React.createContext();

const INIT_STATE = {
    posts: [],
    page: 1,
    totalPages: 10
};

function reducer(state=INIT_STATE, action) {
    switch(action.type) {
        case 'GET_POSTS':
            return { ...state, posts: action.payload };
        case 'CURRENT_PAGE':
            return { ...state, page: action.payload };
        case 'SET_TOTAL_PAGES': 
            return { ...state, totalPages: action.payload };
        default:
            return state;
    };
};

const PostContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getPosts() {
        let res = await axios(`https://rickandmortyapi.com/api/character?page=${state.page}`);
        dispatch({
            type: 'GET_POSTS',
            payload: res.data.results
        });
        dispatch({
            type: 'SET_TOTAL_PAGES',
            payload: res.data.info.pages
        });
    };

    useEffect(() => {
        getPosts();
    }, [state.page, ]);

    function setPage(page) {
        dispatch({
            type: 'CURRENT_PAGE',
            payload: page
        });
    };
    
    return (
        <postsContext.Provider value={{
            posts: state.posts,
            page: state.page,
            totalPages: state.totalPages,

            getPosts,
            setPage
        }}>
            { children }
        </postsContext.Provider>
    )
};

export default PostContextProvider;
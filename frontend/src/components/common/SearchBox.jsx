import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ImgSearch from '../../assets/img/search.svg';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const inputSearch = event => {
        setSearch(event.target.value);
    };
    const submitAction = () => {
        dispatch(push('/search/?search=' + search));
    };
    return (
        <>
            <form onSubmit={submitAction} class="searcharea">
                <div class="searcharea mar15 searchpop">
                    <input type="text" onChange={inputSearch} name="search" />
                    <img src={ImgSearch} alt="" />
                </div>
            </form>
        </>
    );
};

export default SearchBox;
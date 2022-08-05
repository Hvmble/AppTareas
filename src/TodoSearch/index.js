import React, {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.scss';
import {TextField} from '@mui/material';
function TodoSearch(){
    const { searchValue, setSearchValue } = useContext(TodoContext);
    const onChangeText = (event) =>{
        setSearchValue(event.target.value);
    }
    return(
        <>
        <TextField className='TodoSearch' onChange={onChangeText} fullWidth   value={searchValue} variant="outlined"/>
        
        </>
    );
}

export {TodoSearch};
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Context from './Context'
import {
    TextField
} from '@material-ui/core';

const Field = ({ options=[{ value:0, label:''}], label='label' }) => {
    return (
        <Context.Consumer>
            {
                ({ onSelect })=>{
                    return (
                        <Autocomplete
                            id="combo-box-demo"
                            options={options}
                            getOptionLabel={(option) => option[label]}
                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                            onChange = { onSelect }
                        /> 
                    )
                }
            }
        </Context.Consumer>
        
    );
};

export default Field;
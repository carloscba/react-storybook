import React, { useContext, useEffect } from 'react';
import {
    FormControl,
    InputLabel,
    Select as SelectBox,
    MenuItem
} from '@material-ui/core';
import Context from './Context'

const Select = ({ label, options, name, value }) => {
    const { state, onChange, addItemState } = useContext(Context)
    
    useEffect(()=>{
        addItemState(name, value)
    }, [])

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <SelectBox
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ (state[name]) ? state[name] : '' }
                onChange={onChange}
                name={ name }
            >
                {
                    options.map((option, index)=>{
                        return <MenuItem key={index} value={ option.value }>{ option.label }</MenuItem>
                    })
                }
            </SelectBox>
        </FormControl>
    )
    
};

export default Select;
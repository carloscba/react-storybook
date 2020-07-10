import 'date-fns';
import React, { useContext, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Context from './Context'

const Picker = ({ label= 'From', name='from' }) => {
    const { state, onChange, addItemState } = useContext(Context)

    useEffect(()=>{
        addItemState(name, Date())
    }, [])    

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label={ label }
            value={ (state[name]) ? state[name] : new Date()}
            name={ name }
            onChange={ (value) => {
                onChange({target:{name,value}})
            } }
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            fullWidth
            />
        </MuiPickersUtilsProvider>
    );    
};

export default Picker;
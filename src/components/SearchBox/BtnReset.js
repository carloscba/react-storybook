import React, { useContext } from 'react';
import {
    Button
} from '@material-ui/core';
import Context from './Context'

const BtnReset = ({ label='Reset' }) => {
    const { onReset } = useContext(Context);
    return <Button variant="contained" color="secondary" onClick={onReset} fullWidth>{ label }</Button>;
}

export default BtnReset;
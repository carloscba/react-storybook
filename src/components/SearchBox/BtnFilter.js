import React, { useContext } from 'react';
import {
    Button
} from '@material-ui/core';
import Context from './Context'

const BtnFilter = ({ label='Filter' }) => {
    const { onSubmit } = useContext(Context);
    return <Button variant="contained" color="primary" onClick={onSubmit} fullWidth>{ label }</Button>;
}
export default BtnFilter;
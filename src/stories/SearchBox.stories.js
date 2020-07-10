import React from 'react';
import {
    Grid
} from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import SearchBox from '../components/SearchBox/SearchBox';

const options = [{
    value: '',
    label: 'NONE'
}, {
    value: '0',
    label: 'Item 0'
}, {
    value: '1',
    label: 'Item 1'
},
{
    value: '2',
    label: 'Item 2'
}]

const months = [{
    value: '',
    label: 'NONE'
}, {
    value: '0',
    label: 'Enero'
}, {
    value: '1',
    label: 'Febrero'
}]

const onSubmitHandler = (formData) => {
    console.log('formData', formData);
}

storiesOf('SearchBox', module).add('Default configuration', () => {

   return (
        <SearchBox onSubmit={onSubmitHandler}>
            <SearchBox.Select label="Bot" name="bot" options={options} />
            <SearchBox.Select label="Month" name="month" options={months} />
            <SearchBox.Picker label="From" name="from" />
            <SearchBox.Picker label="To" name="to" />
            <SearchBox.BtnReset label="Reset" />
            <SearchBox.BtnFilter label="Search" />
        </SearchBox>
    )
})

storiesOf('SearchBox', module).add('Grid layout', () => {

    return (
         <SearchBox onSubmit={onSubmitHandler}>
             <Grid container spacing={3} alignItems="center">
                 <Grid item xs={2}>
                     <SearchBox.Select label="Bot" name="bot" options={options} />
                 </Grid>
                 <Grid item xs={2}>
                     <SearchBox.Select label="Month" name="month" options={months} />
                 </Grid>
                 <Grid item xs={2}>
                     <SearchBox.Picker label="From" name="from" />
                 </Grid>
                 <Grid item xs={2}>
                     <SearchBox.Picker label="To" name="to" />
                 </Grid>
                 <Grid item xs={4}>
                     <SearchBox.BtnReset label="Reset" />
                     <SearchBox.BtnFilter label="Search" />
                 </Grid>
             </Grid>
 
         </SearchBox>
     )
 })
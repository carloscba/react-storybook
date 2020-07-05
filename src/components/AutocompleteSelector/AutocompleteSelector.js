import React, { useState, Component } from 'react';
import {
    TextField,
    Paper,
    Grid
} from '@material-ui/core';
import Context from './Context';
import Field from './Field';
import Selection from './Selection';

class AutocompleteSelector extends Component {
    
    static Field = Field;
    static Selection = Selection;

    state = {
        selection: null
    }

    onSelect = (event, value) => {
        console.log(value)
        this.setState({selection: value})
    }

    render() {
        const renderChildren = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {})
        });

        return (
            <Paper>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Context.Provider value={ {...this.state, onSelect: this.onSelect} }>
                            { renderChildren }
                        </Context.Provider>
                    </Grid>
                </Grid>
            </Paper>
        )
        
    }
};

export default AutocompleteSelector;
import React, { useState, Component } from 'react';
import Context from './Context';
import Select from './Select';
import BtnFilter from './BtnFilter';
import BtnReset from './BtnReset';
import Picker from './Picker';

const initialState = {}

class SearchBox extends Component {
    static Select = Select;
    static BtnFilter = BtnFilter;
    static BtnReset = BtnReset;
    static Picker = Picker;
    
    constructor(props) {
        super(props);
        this.state = initialState
    }

    onChange = (event) => this.addItemState(event.target.name, event.target.value);
    addItemState = (name, value= '') => this.setState({[name]: value});        
    onSubmit = () => this.props.onSubmit(this.state);
    onReset = () => Object.keys(this.state).map(key => this.setState({[key] : ''}));

    render() {
        const addItemState = this.addItemState;
        const renderChildren = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {});
        });                
        return (
            <Context.Provider value={ { state: this.state, addItemState: this.addItemState, onChange: this.onChange, onReset: this.onReset, onSubmit: this.onSubmit } }>
                { renderChildren }
            </Context.Provider>
        )
    }
}

export default SearchBox;
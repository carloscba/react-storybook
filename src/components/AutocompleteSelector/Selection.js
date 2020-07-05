import React from 'react';
import Context from './Context';

const Selection = () => {
    return <Context.Consumer>
        {
            ({ selection }) => {
                return (
                    <span>{ (selection) && selection.label }</span>
                )
            }
        }
    </Context.Consumer>
    
    
};

export default Selection;
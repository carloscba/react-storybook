import React from 'react';

import { storiesOf } from '@storybook/react';
import AutocompleteSelector from '../components/AutocompleteSelector/AutocompleteSelector';

const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    { code: 'AE', label: 'United Arab Emirates', phone: '971' },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },        
]

storiesOf('AutocompleteSelector', module).add('Default configuration', () => {
    return <AutocompleteSelector />
} )

storiesOf('AutocompleteSelector', module).add('Custom options', () => {
    return <AutocompleteSelector options={ countries } label="label" />
} )

storiesOf('AutocompleteSelector', module).add('With Children', () => {
    return (
        <AutocompleteSelector>
            <AutocompleteSelector.Field options={ countries }/>
            <AutocompleteSelector.Selection/>
        </AutocompleteSelector>        
    )
} )
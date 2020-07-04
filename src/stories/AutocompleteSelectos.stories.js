import React from 'react';

import { storiesOf } from '@storybook/react';
import AutocompleteSelector from '../components/AutocompleteSelector/AutocompleteSelector';

storiesOf('AutocompleteSelector', module).add('with background', () => {
    return <AutocompleteSelector />
} )
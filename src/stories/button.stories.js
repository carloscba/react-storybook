import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../components/button/Button';

storiesOf('Button', module).add('with background', () => {
    return <Button />
} )
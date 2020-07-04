import { configure } from '@storybook/react';

const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);
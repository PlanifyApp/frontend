import React from 'react';
import { ListComponent } from '../../../src/components/aside/ListComponent';

describe('<ListComponent />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<ListComponent />);
    });
});

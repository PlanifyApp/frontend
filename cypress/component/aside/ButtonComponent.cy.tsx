import React from 'react';
import { ButtonComponent } from '../../../src/components/aside/ButtonComponent';

describe('<ButtonComponent />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<ButtonComponent />);
    });
});

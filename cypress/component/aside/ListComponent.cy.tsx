import React from 'react'
import { ListComponent } from './ListComponent'

describe('<ListComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListComponent />)
  })
})
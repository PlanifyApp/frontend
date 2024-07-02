import React from 'react'
import { Error } from './Error'

describe('<Error />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Error />)
  })
})
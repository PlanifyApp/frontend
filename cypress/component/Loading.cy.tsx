import { Loading } from '../../src/components/Loading';

describe('<Loading />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Loading />);
    });
});

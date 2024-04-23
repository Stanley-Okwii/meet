import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup, testing-library/no-node-access
        AppDOM = render(<App />).container.firstChild;
    })


    test('renders list of events', () => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('render CitySearch', () => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('renders NumberOfEvents', () => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    });

})
import { render, within } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';
import App from '../App';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />)
    })

    test('renders text input', () => {
        const NumberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        expect(NumberOfEventsInput).toBeInTheDocument();
        expect(NumberOfEventsInput).toHaveClass('number-of-events');
    });

    test('default value of input field is 32', () => {
        const NumberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        expect(NumberOfEventsInput).toHaveValue('32');
    })

    test('changes input value when user types', async () => {
        const NumberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(NumberOfEventsInput, '{backspace}{backspace}10');
        expect(NumberOfEventsInput).toHaveValue('10');
    });
});

describe('<NumberOfEvents />integration', () => {

    test('selected number of events by the user are rendered', async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

        await userEvent.type(NumberOfEventsInput, '{backspace}{backspace}10');

        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems =
            within(EventListDOM).queryAllByRole('listitem');
        expect(allRenderedEventItems.length).toEqual(10);
    })
})
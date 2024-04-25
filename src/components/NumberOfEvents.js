import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
    console.log("setCurrentNOE prop value:", setCurrentNOE);
    const [number, setNumber] = useState('32')

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
        setCurrentNOE(value);


    }

    return (
        <div id="number-of-events">
            <input
                type="text"
                className="number-of-events"
                placeholder="Enter a number"
                value={number}
                onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;
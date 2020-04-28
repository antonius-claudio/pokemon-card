import { useState } from 'react';
export default (initialState) => {
    const [state, setState] = useState(initialState);

    return [
        state,
        (e) => setState(e.target.value),
        () => {
            setState('');
        },
    ]
};
import Home from '@Component/Home';

import useInitialState from '@Hooks/useInitialState';
import AppContext from '@Context/AppContext';

import '@Styles/App.css';

function App() {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <Home />
        </AppContext.Provider>
    );
}

export default App;

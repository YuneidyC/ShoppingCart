import Home from './component/Home';

import useInitialState from './hooks/useInitialState';
import AppContext from './context/AppContext';

import './App.css';

function App() {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <Home />
        </AppContext.Provider>
    );
}

export default App;

import Navbar from './component/Navbar';
import ProductList from './component/ProductList';

import useInitialState from './hooks/useinitialState';
import AppContext from './context/AppContext';

import './App.css';

function App() {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <Navbar />
            <ProductList />
        </AppContext.Provider>
    );
}

export default App;

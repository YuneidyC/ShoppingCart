import App from '../App';
import Checkout from '../component/Checkout';

const routes = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/checkout',
        element: <Checkout />,
    },
];

export default routes;

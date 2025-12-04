import App from '../App';
import Checkout from '@Component/Checkout';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'checkout',
                element: <Checkout />,
            },
        ],
    },
];

export default routes;

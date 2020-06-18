import App from '../components/app'
import Hello from '../components/hello'
import Header from '../components/header'

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '',
        // component: Other,
        routes: [
            {
                path: '/hello',
                component: Hello
            },
            {
                path: '/header',
                component: Header
            }
        ]
    }
];

export default routes;
import {MessengerPage} from './pages/MessengerPage';
import {ProfilePage} from './pages/ProfilePage';
import {PageNotFound} from "./pages/PageNotFound";

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerPage,
    },
    {
        path: '/profile',
        exact: true,
        component: ProfilePage,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: MessengerPage,
    },
    {
        path: '*',
        exact: false,
        component: PageNotFound
    }
];
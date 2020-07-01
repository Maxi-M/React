import {MessengerPageRedux} from 'containers/MessengerPageContainer';
import {ProfilePage} from 'pages/ProfilePage';
import {PageNotFound} from "pages/PageNotFound";

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerPageRedux,
    },
    {
        path: '/profile',
        exact: true,
        component: ProfilePage,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: MessengerPageRedux,
    },
    {
        path: '*',
        exact: false,
        component: PageNotFound
    }
];
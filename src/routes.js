const {lazy } = require("react")

export default [
    {
        path:'/register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./views/RegisterView'))
    },
    {
        path:'/login',
        label: 'Login',
        exact: true,
        component: lazy(() => import('./views/LoginView'))
    },
    {
        path:'/contacts',
        label: 'Contacts',
        exact: true,
        component: lazy(() => import('./views/ContactsView.js'))
    },    
]

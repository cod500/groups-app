import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage, SignUpPage, PrivateRoute } from './auth';
import { CreateGroupsPage, GroupPage, GroupsListPage } from './groups';
import { NavBar } from './navigation';
import { Footer } from './navigation/';

const routes = [{
    path: '/',
    Component: GroupsListPage,
    private: true,
    exact: true
},
{
    path: '/groups/:id',
    Component: GroupPage,
    private: true
},
{
    path: '/sign-in',
    Component: SignInPage
},
{
    path: '/sign-up',
    Component: SignUpPage
},
{
    path: '/create-group',
    Component: CreateGroupsPage,
    private: true
}
];

export const Routes = ({ isLoading, user }) => (
    <Router>
        <NavBar user={user} />
        <Switch>
            {routes.map((route, index) => {
                const RouteType = route.private
                    ? PrivateRoute
                    : Route;
                return (
                    <RouteType
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                    >
                        <route.Component />
                    </RouteType>
                );
            })}
        </Switch>
        <Footer />
    </Router>
)
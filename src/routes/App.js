import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Layout Imports
import LandingPage from '../layouts/LandingPage'
import NotLayout from '../layouts/NotLayout'

// Views Imports
import Home from '../views/Home'
import Login from '../views/Login'
import NotFound from '../views/Not_Found'


// Router

const routes = [
    {
        layout: LandingPage,
        subroutes: [
            {
                exact: true,
                path: '/',
                component: Home
            }
        ]
    },
    {
        layout: NotLayout,
        subroutes: [
            {
                exact: true,
                path: '/login',
                component: Login
            }
        ]
    },
]

const App = () => (
    <BrowserRouter>
        <Switch>
            {
                routes.map((route, i) => (
                    <Route 
                        key={i} 
                        exact={route.subroutes.some(r => r.exact)} 
                        path={route.subroutes.map(r => r.path)} 
                    >
                        <route.layout>
                            {
                                route.subroutes.map((subroute, i) => 
                                    <Route key={i} {...subroute} />
                                )
                            }
                        </route.layout>
                    </Route>
                ))
            }
            <Route>
                <LandingPage>
                    <NotFound />
                </LandingPage>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App
import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loading';

const sleep = (timeout = 3000) => new Promise((rs, rj) => {
    setTimeout(() => {
        rs();
    }, timeout);
})

export default class App extends React.Component {


    render() {

        // const Page = Loadable({
        //     async loader() {
        //         const module = await import(/* webpackChunkName: "[request]" */ `../pages/page${pageIndex}`)
        //         await sleep();
        //         return module.default;
        //     },
        //     loading: Loading
        // });

        return (
            <Router>
                <div className="app">
                    <ul>
                        {
                            [0, 1, 2].map(pageIndex => (
                                <li key={pageIndex}>
                                    <Link to={`./page${pageIndex}`}>Page {pageIndex}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="page-container">
                        <Switch>
                            {
                                [0, 1, 2].map(pageIndex => (
                                    <Route
                                        key={pageIndex}
                                        path={`/page${pageIndex}`}
                                        component={ Loadable({
                                            async loader() {
                                                const module = await import(/* webpackChunkName: "[request]" */ `../pages/page${pageIndex}`)
                                                await sleep();
                                                return module.default;
                                            },
                                            loading: Loading
                                        })} />
                                ))
                            }
                            <Redirect to="/page0" />
                        </Switch>
                    </div>
                </div>
            </Router>

        )

    }
}
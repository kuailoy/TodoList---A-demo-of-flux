import React from 'react';
import Loadable from 'react-loadable';
import Loading from './loading';

const sleep = (timeout = 3000) => new Promise((rs, rj) => {
    setTimeout(() => {
        rs();
    }, timeout);
})

export default class App extends React.Component {
    state = {
        pageIndex: 0
    }

    render() {
        const { pageIndex } = this.state;
        const Page = Loadable({
            async loader() {
                const module = await import(/* webpackChunkName: "[request]" */ `../pages/page${pageIndex}`)
                await sleep();
                return module.default;
            },
            loading: Loading
        });

        return (
            <div className="app">
                <ul>
                    <li><a href="#" onClick={() => this.setState({ pageIndex: 0 })}>page0</a></li>
                    <li><a href="#" onClick={() => this.setState({ pageIndex: 1 })}>page1</a></li>
                    <li><a href="#" onClick={() => this.setState({ pageIndex: 2 })}>page2</a></li>
                </ul>
                <div className="page-container">
                    <Page />
                </div>
            </div>

        )

    }
}
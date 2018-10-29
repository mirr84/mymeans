import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../store/utils/connector";

import Menu from "../Menu/Menu";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";

import News from "../Contents/News/News";
import Reg from "../Contents/Reg/Reg";
import Auth from "../Contents/Auth/Auth";

const methods = {
    componentDidMount(props) {
    }
}

const Main = ({state, dispatch, Layout}) => {

    return (
        <div>
                <Layout head={<Head />}
                        footer={<Footer />}
                        content={
                            <div>
                                { state.menuReducer.select === 'news' ? <News /> : '' }
                                { state.menuReducer.select === 'auth' ? <Auth />: '' }
                                { state.menuReducer.select === 'reg' ? <Reg />: '' }
                            </div>
                        }
                        menuDekstop={
                            <Menu />
                        }
                        menuMobile={
                            <div> menu mobile </div>
                        }
                />
        </div>
    );

}

export default connector(lifecycle(methods)(Main));
import { combineReducers } from 'redux';

import Auth from './auth/reducers';
import Layout from './layout/reducers';
import PageTitle from './pageTitle/reducers';
import Musteriler from './musteriler/reducers';

export default combineReducers({
    Auth,
    Layout,
    PageTitle,
    Musteriler,
});

import jwt_decode from 'jwt-decode';
import Routes from './routes/Routes';
import { configureFakeBackend } from './helpers';
import './assets/scss/Theme.scss';
import { useEffect } from 'react';
import { login } from './service/login';
import useRedux from './hooks/useRedux';

interface DecodedToken {
    email: string;
    password: string;
    // Add other properties if needed
}

const App = () => {
    configureFakeBackend();
    return <Routes />;
};

export default App;

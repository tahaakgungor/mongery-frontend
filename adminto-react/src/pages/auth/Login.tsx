import { useEffect, useState } from 'react';
import { Button, Alert, Row, Col, Nav } from 'react-bootstrap';
import { Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

// hooks
import { useRedux } from '../../hooks/';

// actions
import { resetAuth, loginUser } from '../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../components/form/';

import { login } from '../../service/login';
import Loader from '../../components/Loader';

import AuthLayout from './AuthLayout';
import { getToken } from '../../redux/token/actions';
import React from 'react';

type LocationState = {
    from?: Location;
};

type UserData = {
    email: string;
    password: string;
};

/* bottom links */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    <Link to="/auth/forget-password" className="text-muted ms-1">
                        <i className="fa fa-lock me-1"></i>
                        {t('Forgot your password?')}
                    </Link>
                </p>
                <p className="text-muted">
                    {t("Don't have an account?")}{' '}
                    <Link to={'/auth/register'} className="text-dark ms-1">
                        <b>{t('Sign Up')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Login = () => {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();
    const location = useLocation();
    const navigate = useNavigate();
    let redirectUrl = '/';

    const [user, setUser] = useState<string>('');
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const tok = appSelector((state) => state);



    useEffect(() => {
        if (userLoggedIn) {
            navigate('/dashboard'); // Kullanıcıyı dashboard sayfasına yönlendir
        }
    }, [userLoggedIn, navigate]);

    /*
    form validation schema
  */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required(t('Please enter Email')).email(t('Please enter valid Email')),
            password: yup.string().required(t('Please enter Password')),
        })
    );

    /*
    handle form submission
  */
    const onSubmit = (formData: UserData) => {
        setLoading(true);
        setError('');
        handleLogin(formData['email'], formData['password']);
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            let token = await login(email, password);
            dispatch(getToken('token', token));

            console.log(token);
            setLoading(true);
            setUserLoggedIn(true);
            setUser(token);
        } catch (error) {
            setLoading(false);
            setError('Invalid Credentials');
            console.log(error);
        }
    };

    return (
        <>
            <AuthLayout bottomLinks={<BottomLink />}>
                <div className="text-center mb-4">
                    <h4 className="text-uppercase mt-0">{t('Sign In')}</h4>
                </div>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}
                {loading && <Loader />}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ email: 'adminto@coderthemes.com', password: 'test' }}>
                    <FormInput
                        type="email"
                        name="email"
                        label={t('Email address')}
                        placeholder={t('hello@coderthemes.com')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        type="checkbox"
                        name="checkbox"
                        label={t('Remember me')}
                        containerClass={'mb-3'}
                        defaultChecked
                    />

                    <div className="text-center d-grid mb-3">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('Log In')}
                        </Button>
                    </div>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default Login;

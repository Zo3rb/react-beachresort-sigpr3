import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Hero>
            <Banner title="404" subTitle="Page Not Found">
                <Link to="/" className="btn-primary">Get Back to Home Page</Link>
            </Banner>
        </Hero>
    );
}

export default ErrorPage;

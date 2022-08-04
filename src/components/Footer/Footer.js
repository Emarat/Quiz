import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="d-flex flex-column min-vh-100">

            <footer className="bg-light text-center text-dark mt-auto p-2">
                <p>COPYRIGHT &copy;{year}</p>
            </footer>

        </div>
    );
};

export default Footer;
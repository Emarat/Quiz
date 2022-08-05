import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                navigate('/home');

            })

    }


    return (
        <form onSubmit={handleUserSignIn}>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please Enter Your Email & Password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input onBlur={handleEmailBlur} type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email' required />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input onBlur={handlePasswordBlur} type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Password' required />

                                        </div>



                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                        <p className="mt-2">Don't have an account? <Link to="/signUp" className="text-white-50 fw-bold text-decoration-none">SignUp</Link>
                                        </p>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default LogIn;
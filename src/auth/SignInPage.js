import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export function SignInPage() {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [signInError, setSignInError] = useState('');
    const history = useHistory();

    const onClickSignIn = async () => {
        try {
            setSignInError('');
            await firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue);
            history.push('/')
        } catch (e) {
            setSignInError(e.message);
        }
    }

    return (
        <div className="full-height-page cover-banner">
            <div className="banner-items">
                <div>
                    <h2>Join the Community!</h2>
                    <p className="banner-p">Connect with your friends in this social community!</p>
                </div>
                <div className="centered-container space-before sign-up-div">
                    {signInError ? <div><p className="error-message">{signInError}</p></div> : null}
                    <input type="text"
                        value={emailValue}
                        placeholder="Email address"
                        className="full-width space-after"
                        onChange={e => setEmailValue(e.target.value)} />

                    <input type="password"
                        value={passwordValue}
                        placeholder="Password"
                        className="full-width space-after"
                        onChange={e => setPasswordValue(e.target.value)} />
                    <div className="signup-btn-div">
                        <button className="full-width btn btn-rounded sign-in-btn" onClick={onClickSignIn}>Sign In</button>
                        <Link to="/sign-up">
                            <div><p>Not a member? Sign up</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

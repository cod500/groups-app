import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { signUpUser } from '../auth';

export function SignUpPage() {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [fullNameValue, setFullNameValue] = useState('');
    const [signUpError, setSignUpError] = useState('');
    const history = useHistory();

    const onClickSignUp = async () => {
        try {
            setSignUpError('');
            await firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue);
            const userId = await firebase.auth().currentUser.uid;
            await signUpUser(fullNameValue, emailValue, userId);
            history.push('/')
        } catch (e) {
            setSignUpError(e.message);
        }
    }

    return (
        <div className="full-height-page cover-banner">
            <div className="banner-items">
                <div>
                    <h2>Welcome to</h2>
                    <h2>the Community!</h2>
                    <p className="banner-p">Connect with your friends in this social community!</p>
                </div>
                <div className="centered-container space-before sign-up-div ">
                    {signUpError ? <div><p className="error-message">{signUpError}</p></div> : null}
                    <input type="text"
                        value={fullNameValue}
                        placeholder="Name"
                        className="full-width space-after"
                        onChange={e => setFullNameValue(e.target.value)} />
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
                        <button className="full-width btn btn-rounded sign-in-btn" onClick={onClickSignUp}>Sign Up</button>
                        <Link to="/sign-in">
                            <div><p>Already a member? Sign in</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


export function NavBar({ user }) {
    const history = useHistory();
    const onClickSignOut = async () => {
        await firebase.auth().signOut();
        history.push('/sign-in')
    }

    return (
        <nav className="nav-bar">
            <Link to="/">
                <h1 className="app-heading text-white">Community Groups</h1>
            </Link>
            {user
                ? (
                    <>
                        <button className="btn btn-rounded sign-out-button" onClick={onClickSignOut}>Sign Out</button>
                        <p className="logged-in-as space-before">Logged in as {user.email}</p>
                    </>
                ) : null}

        </nav>
    )
}

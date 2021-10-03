import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';

export function useUser() {
    const [userInfo, setUserInfo] = useState(() => {
        const user = firebase.auth().currentUser;
        const isLoading = !user;
        return { isLoading, user }
    });

    useEffect(() => {
        return firebase.auth().onAuthStateChanged(user => {
            setUserInfo({ isLoading: false, user });
        });
    }, []);

    return userInfo;
}
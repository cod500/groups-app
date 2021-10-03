import React from 'react';
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';


export function useUserGroups() {
    const [isLoading, setIsLoading] = useState(true);
    const [userGroups, setUserGroups] = useState([]);

    const loadGroups = async () => {
        const user = firebase.auth().currentUser;
        if (!user) {
            setUserGroups([]);
            setIsLoading(false);
            return;
        }

        const response = await fetch(`https://community-grps.herokuapp.com/users/${user.uid}/groups`, {
            headers: {
                AuthToken: await user.getIdToken(),
            }
        });
        const groups = await response.json();
        setUserGroups(groups);
        setIsLoading(false);
    }

    useEffect(() => {
        loadGroups();
    }, []);

    return { isLoading, userGroups };
}

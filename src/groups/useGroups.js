import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';

export function useGroups() {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const loadGroups = async () => {
            const response = await fetch('https://community-grps.herokuapp.com/groups');
            const groups = await response.json();
            setGroups(groups);
            setIsLoading(false);
        }
        loadGroups();
    }, [])

    return { isLoading, groups };
}

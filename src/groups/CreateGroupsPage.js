import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postWithCredentials } from '../data';

export function CreateGroupsPage() {
    const [nameValue, setNameValue] = useState('');
    const history = useHistory();

    const createGroup = async () => {
        const response = await postWithCredentials('/groups', { name: nameValue });
        const { newGroupId } = await response.json();
        history.push(`/groups/${newGroupId}`);
    }

    return (
        <div className="centered-container container-fluid py-5">
            <div className="section-banner centered-container" style={{ backgroundImage: "url(/banner.png)" }}>
                <h1>Create Groups</h1>
                <p>Create a new group and invite friends!</p>
                <img class="section-banner-icon" src="/members-icon.png" alt="section-icon"></img>
            </div>
            <div className="centered-container create-post-div">
                <h1>Create Group</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Name for Group..."
                        value={nameValue}
                        onChange={e => setNameValue(e.target.value)} />
                    <button className="btn btn-info btn-primary" onClick={createGroup}>Create Group</button>
                </div>
            </div>
        </div>
    );
}

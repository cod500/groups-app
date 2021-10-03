import React from 'react';
import { postWithCredentials } from '../data';


export function GroupsListItem({ group }) {
    const requestToJoin = async () => {
        await postWithCredentials(`/groups/${group.id}/requests`);
        alert('Yout request has been submitted')
    }

    return (
        <div className="card m-2">
            <div className="card-body">
                <div className="list-item">
                    <div className="list-item-data">
                        <h3>{group.name} <span><div className="icon-span"><img className="public-icon" src="/private.png" alt="image" /></div></span></h3>
                        <p >Owned By: {group.owner.fullName}</p>
                        <p>{group.members.length} members</p>
                    </div>
                    <button className="btn btn-info btn-primary float-end" onClick={requestToJoin}>Ask to Join</button>
                </div>
            </div>
        </div>
    )
}

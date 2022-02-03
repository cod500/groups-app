import React from 'react';
import { Link } from 'react-router-dom';


export function MyGroupsListItem({ group }) {
    return (
        <div className="card m-2 list-card">
            <div className="card-body">
                <div className="list-item">
                    <div className="list-item-data">
                        <Link to={`/groups/${group.id}`}>
                            <h3>{group.name} <span><div className="icon-span"><img className="public-icon" src="/planet-earth.png" alt="image" /></div></span></h3>
                        </Link>
                        <p>Owned By: {group.owner.fullName}</p>
                        <p>{group.members.length} members</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

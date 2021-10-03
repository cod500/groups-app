import React from 'react';
import { Link } from 'react-router-dom';
import { GroupsList } from './GroupsList';
import { GroupsListItem } from './GroupsListItem';
import { MyGroupsListItem } from './MyGroupsListItem';
import { useGroups } from './useGroups';
import { useUserGroups } from './useUserGroups';


export function GroupsListPage() {
    const { isLoading: isLoadingAllGroups, groups: allGroups } = useGroups();
    const { isLoading: isLoadingUserGroups, userGroups } = useUserGroups();
    const isLoading = isLoadingAllGroups && isLoadingUserGroups;

    const notUserGroups = allGroups
        .filter(group => userGroups.every(userGroup => userGroup.id !== group.id));
    return (
        <div className="container-fluid py-5">
            <div className="section-banner centered-container" style={{ backgroundImage: "url(/banner.png)" }}>
                <h1>Groups</h1>
                <p>Browse all the groups of the community!</p>
                <img class="section-banner-icon" src="/groups-icon.png" alt="section-icon"></img>
            </div>
            <div>
                <div className="my-group-div">
                    <h1 className="section-heading">My Groups</h1>

                    <div className="d-flex">
                        <GroupsList
                            isLoading={isLoading}
                            groups={userGroups}
                            ListItemComponent={MyGroupsListItem} />
                    </div>
                </div>
            </div>
            <div className="my-group-div">
                <h1 className="section-heading">Other Groups</h1>
                <div className="d-flex">
                    <GroupsList
                        isLoading={isLoading}
                        groups={notUserGroups}
                        ListItemComponent={GroupsListItem} />
                </div>
                <Link to="/create-group">
                    <button className="btn btn-info btn-primary float-end">Create New Group</button>
                </Link>
            </div>
        </div>
    )
}

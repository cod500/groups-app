import React from 'react'

export function RequestsListItem({ request, onAccept, onReject }) {
    return (
        <div>
            <h3>{request.userName}</h3>
            <button className="accept-btn" onClick={() => onAccept(request.id)}>Accept</button>
            <button className="reject-btn" onClick={() => onReject(request.id)}>Reject</button>
        </div>
    )
}

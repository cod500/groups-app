import React from 'react'

export function MessagesListItem({ message }) {
    return (
        <div className="list-item">
            <div className="list-item-data">
                <h3>{message.userName}</h3>
                <div className="box sb2">{message.text}</div>
            </div>
        </div>
    )
}


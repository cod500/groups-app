import React from 'react'
import { MessagesListItem } from './MessagesListItem';

export function MessagesList({ messages }) {
    return (
        <>
            <h2 className="section-heading">Message Wall</h2>
            <div className="messages-container">
                {messages.length > 0
                    ? (
                        messages.map(message => (
                            <MessagesListItem key={message._id} message={message} />
                        ))
                    ) : (
                        <p>No messages in this group yet</p>
                    )}
            </div>
        </>
    )
}

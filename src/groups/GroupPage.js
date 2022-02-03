import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../auth';
import { useProtectedResource, postWithCredentials } from '../data';
import { MessagesList } from '../messages';
import { RequestsList } from '../requests';
import { FiSend } from "react-icons/fi";


export function GroupPage() {
    const [messageValue, setMessageValue] = useState('');
    const { id } = useParams();
    const { user } = useUser();
    const [group] = useProtectedResource(`/groups/${id}`, { owner: {}, messages: [], requests: [] });
    const [messages, setMessages] = useProtectedResource(`/groups/${id}/messages`, []);
    const [requests, setRequests] = useProtectedResource(`/groups/${id}/requests`, []);


    const postMessage = async () => {
        const response = await postWithCredentials(`/groups/${id}/messages`, { text: messageValue });
        const updatedMessages = await response.json();
        setMessages(updatedMessages);
        setMessageValue('');
    }

    const acceptRequest = async (requestId) => {
        const response = await postWithCredentials(`/groups/${id}/requests/${requestId}/accept`);
        const updatedRequests = await response.json();
        setRequests(updatedRequests);
    }

    const rejectRequest = async (requestId) => {
        const response = await postWithCredentials(`/groups/${id}/requests/${requestId}/reject`);
        const updatedRequests = await response.json();
        setRequests(updatedRequests);
    }

    console.log(group.members)

    return (
        <div className="centered-container">
            <header className="groups-heading">
                <div className="group-banner" style={{ backgroundImage: "url(/cover-image.jpeg)", BackgroundSize: "no-repeat center center/cover" }}></div>
                <div className="group-header">
                    <div >
                        <div className="group-stats">
                            <div><h1>{group.name}</h1></div>
                            <div>  <p>Owned by: {group.owner.fullName}</p></div>
                            <div><p> {messages.length} messages</p></div>
                        </div>
                    </div>
                </div>
            </header>
            <MessagesList messages={messages} />
            <div className="new-message-form">
                <input
                    type="text"
                    placeholder="Enter your message here..."
                    value={messageValue}
                    onChange={e => setMessageValue(e.target.value)} />
                <button className="" onClick={postMessage}><FiSend />
                </button>
            </div>
            {group.ownerId === user.uid
                ? <RequestsList
                    requests={requests}
                    onAccept={acceptRequest}
                    onReject={rejectRequest} />
                : null}
        </div>
    );
}

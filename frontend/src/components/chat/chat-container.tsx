import React, {useRef, useState} from 'react';
import styles from './chat-container.module.scss';
import TypingIndicator from "../typing-indicator/typing-indicator";
import type {IChatQueryAndResponse} from "./chat-container.types";
import axios from "axios";

export const ChatContainer: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [chatQueryAndResponse, setChatQueryAndResponse] = useState<IChatQueryAndResponse[]>([]);
    const [isChatRequestPending, setIsChatRequestPending] = useState<boolean>(false);
    const textInput = useRef<HTMLInputElement>(null)
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };
    const submitRequest = async () => {
        if (textInput.current?.value !== '') {

            setIsChatRequestPending(true);

            try {
                const response = await axios.post("/gemini/chat", textInput?.current?.value);
                setChatQueryAndResponse([...chatQueryAndResponse, {query: textInput?.current?.value??'', response: response.data}]);
                if (textInput.current) {
                    textInput.current.value = '';
                }
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setIsChatRequestPending(false);
            }
        }
    }
    return (
        <div className={`${styles['chat-wrapper']} ${isOpen ? styles['is-open'] : ''}`}>
            {/* Floating Action Button */}
            <button
                className={styles['chat-toggle-btn']}
                onClick={toggleChat}
                aria-label="Toggle chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Main Chat Window */}
            <div className={styles['chat-window']}>
                <div className={styles['chat-header']}>
                    <h3>Live Support</h3>
                </div>

                <div className={styles['chat-body']}>
                    <div className={styles['chat-message']}>
                        <p>Hello! How can we help you today?</p>
                    </div>
                </div>
                {isChatRequestPending &&
                    <TypingIndicator></TypingIndicator>
                }
                {chatQueryAndResponse.length > 0 && (
                    chatQueryAndResponse.map((chatQryResponse, index) => {
                        return (
                            <>
                                <div key={`query-${index}`} className={styles['right-aligned-box']}>{chatQryResponse.query}</div>
                                {chatQryResponse.response && (
                                    <div key={`query-${index}`} className={styles['left-aligned-box']}>{chatQryResponse.response}</div>
                                )}
                            </>
                        )
                    })
                )}
                <div className={styles['chat-footer']}>
                    <input
                        type="text"
                        ref={textInput}
                        disabled={isChatRequestPending}
                        placeholder="Type a message..."
                        className={styles['chat-input']}
                    />
                    <button className={styles['chat-send-btn']} onClick={submitRequest}>Send</button>
                </div>
            </div>
        </div>
    );
};

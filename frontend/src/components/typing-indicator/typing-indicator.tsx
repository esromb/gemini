import styles from './typing-indicator.module.scss';
export default function TypingIndicator() {
    return (
        <div className={styles.typingIndicator} aria-label="Someone is typing...">
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
            <span className={styles.typingDot}></span>
        </div>
    );
}
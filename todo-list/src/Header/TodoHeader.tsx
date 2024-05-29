
import styles from './TodoHeader.module.css';

const TodoHeader = () => {
    return (
        <header>
            <h1 className={styles.headerTitle}>
                <mark className={styles.todoCount}>5</mark>
                개의 할일
            </h1>
        </header>
    )
}

export default TodoHeader;
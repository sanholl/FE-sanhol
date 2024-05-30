
import styles from './TodoHeader.module.css';

interface TodoHeaderProps {
    count: number
}

const TodoHeader = (props:TodoHeaderProps) => {
    return (
        <header>
            <h1 className={styles.headerTitle}>
                <mark className={styles.todoCount}>{props.count}</mark>
                개의 할일
            </h1>
        </header>
    )
}

export default TodoHeader;
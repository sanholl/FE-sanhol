
import { useTodoState } from '../../features/todo/lib/context/TodoProvider';
// import { useCombinedContext } from '../../features/todo/lib/context';
import styles from './TodoHeader.module.css';

export const TodoHeader = () => {
    const todoState = useTodoState();
    // const {todoState} = useCombinedContext();
    const count = todoState.todos.filter((todo) => !todo.isChecked).length;

    return (
        <header>
            <h1 className={styles.headerTitle}>
                <mark className={styles.todoCount}>{count}</mark>
                개의 할일
            </h1>
        </header>
    )
};
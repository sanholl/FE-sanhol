import TodoItem from '../ListItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
    const arr = ['React', 'Typescript', 'Javascript', 'CSS', 'HTML'];
    return (
        <section>
            <ol className={styles.olContainer}>
              {
                arr.map((str, index) => {
                  return <TodoItem key={`${str}_${index}`} text={str}/>
                })
              }
            </ol>
        </section>
    )
}

export default TodoList;
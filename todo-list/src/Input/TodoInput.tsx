import { RiChatNewLine } from 'react-icons/ri';
import styles from './TodoInput.module.css';

const TodoInput = () => {
    return (
        <section className={styles.container}>
          <form className={styles.formContainer}>
            <input className={styles.input} placeholder={'해야할 Todo'}/>
          </form>
          <button className={styles.enter}><RiChatNewLine/></button>
        </section>
    );
}

export default TodoInput;
import styles from './TodoListTools.module.css';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const TodoListTools = () => {
  return (
    <section className={styles.container}>
      <button className={styles.button}> 
        <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon}/> 전체완료 
      </button>
      <button className={[styles.button, styles.removeAllButton].join(' ')}> 
        <MdDelete className={styles.removeAllIcon} /> 전체삭제 
      </button>
    </section>
  )
}

export default TodoListTools;
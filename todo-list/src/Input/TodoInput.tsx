import { RiChatNewLine } from 'react-icons/ri';
import styles from './TodoInput.module.css';
import { ChangeEvent, FormEvent } from 'react';

interface TodoInputProps {
  text: string
  onTextChange: (text:string) => void
  onSubmit: () => void
}

const TodoInput = (props: TodoInputProps) => {

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(event.target.value);
  }

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    props.onSubmit();
  }
  
  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder={'해야할 Todo'} value={props.text} onChange={handleInputChange}/>
        <button type='submit' className={styles.enter}><RiChatNewLine /></button>
      </form>
    </section>
  );
}

export default TodoInput;
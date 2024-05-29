import { RiChatNewLine } from 'react-icons/ri';
import './TodoInput.css';

const TodoInput = () => {
    return (
        <section className={'container'}>
          <form className={'formContainer'}>
            <input className={'input'} placeholder={'해야할 Todo'}/>
          </form>
          <button className={'enter'}><RiChatNewLine/></button>
        </section>
    );
}

export default TodoInput;
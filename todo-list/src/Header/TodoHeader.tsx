
import './TodoHeader.css';

const TodoHeader = () => {
    return (
        <header>
            <h1 className={'headerTitle'}>
                <mark className={'todoCount'}>5</mark>
                개의 할일
            </h1>
        </header>
    )
}

export default TodoHeader;
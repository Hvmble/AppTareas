import './TodoItem.scss';
import { Check, Clear,  } from '@mui/icons-material';


function TodoItem(props) {
    return (
        <li  className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                <Check></Check>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span onClick={props.onDelete} className="Icon Icon-delete">
                <Clear></Clear>
            </span>
        </li>
    );
}

export { TodoItem };
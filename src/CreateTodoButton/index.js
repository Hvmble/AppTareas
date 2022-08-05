 import './CreateTodoButton.scss';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import { green } from '@mui/material/colors';
function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);

  };
  
  return (
    <button className="btnAdd" onClick={onClickButton}>
      <AddCircleOutlineOutlined  sx={{ fontSize: 80, color: green.A400 }}>
      </AddCircleOutlineOutlined>
    </button>
  );
}


export { CreateTodoButton };
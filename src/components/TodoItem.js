import React from "react";
import {DeleteOutlined} from '@ant-design/icons'
import {CheckOutlined} from '@ant-design/icons'
import { Button } from 'antd';
function TodoItem(props) {
  return (
    <>
      <li className={props.completed ? "completed" : "uncompleted"}>
        {props.id}: {props.title}
        <div className='removeTodo'>
        <Button className='binBtn' ><DeleteOutlined className='bin'/></Button>
        </div>
        <div className='completeTodo'>
            <Button className='checkBtn'><CheckOutlined className='check'/></Button>
        </div>
      </li>
    </>
  )
}

export default TodoItem;

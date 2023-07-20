import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { useState } from 'react';
import { addTodo } from './TodoSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const statusVal = useSelector((state) => state.filter.status);
  const filterPriority = useSelector((state) => state.filter.priority);

  const todos = useSelector((state) => {
    const todosFilters = state.todoList.filter((todo) => {
      if (statusVal === 'All') {
        return filterPriority.length > 0
          ? todo.name.includes(state.filter.search) &&
              filterPriority.includes(todo.priority)
          : todo.name.includes(state.filter.search);
      }
      return todo.name.includes(state.filter.search) &&
        (statusVal === 'Completed' ? todo.isDone : !todo.isDone) &&
        filterPriority.length
        ? filterPriority.includes(todo.priority)
        : statusVal === 'Completed'
        ? todo.isDone
        : !todo.isDone;
    });
    return todosFilters;
  });
  /* Nếu mà status === All thì chỉ lọc ra nhũng cái gõ ra
  Nếu status === completed -> lọc ra todo -> isDone == true
  Không thì lọc ra những cái đang làm -> isDone  == false 
  
  Nếu status === "All" và priority > 0 thì lọc ra name và priority, không thì lọc name
  Nếu status !== "All" và priority > 0 thì lọc ra priority
  **/

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSelect = (value) => {
    setPriority(value);
  };

  const handleClick = () => {
    dispatch(
      addTodo({
        id: uuidV4(),
        name,
        priority,
        isDone: false,
      })
    );

    setName('');
    setPriority('Medium');
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todos &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              isDone={todo.isDone}
            />
          ))}
      </Col>

      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }}>
          <Input
            placeholder='Enter your todo....'
            value={name}
            onChange={handleChange}
          />
          <Select
            defaultValue='Medium'
            value={priority}
            onChange={handleSelect}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}

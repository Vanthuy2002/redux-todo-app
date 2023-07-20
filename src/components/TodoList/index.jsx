import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidV4 } from 'uuid';
import { useState } from 'react';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList);
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
            <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />
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

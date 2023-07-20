import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  priorityFilter,
  startSearch,
  statusFilterChange,
} from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const [filterVal, setFilterVal] = useState('');
  const [filterRadio, setFilterRadio] = useState('');
  const [filterPriority, setFilterPriority] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setFilterVal(e.target.value);
    dispatch(startSearch(e.target.value));
  };

  const handleChangeRadio = (e) => {
    setFilterRadio(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };

  const handlePriorytoChange = (value) => {
    setFilterPriority(value);
    dispatch(priorityFilter(value));
  };

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder='input search text'
          value={filterVal}
          onChange={handleSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterRadio} onChange={handleChangeRadio}>
          <Radio checked={filterRadio === 'All'} value='All'>
            All
          </Radio>
          <Radio checked={filterRadio === 'Completed'} value='Completed'>
            Completed
          </Radio>
          <Radio checked={filterRadio === 'Todo'} value='Todo'>
            To do
          </Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={handlePriorytoChange}
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
      </Col>
    </Row>
  );
}

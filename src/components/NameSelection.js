import React from 'react'
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

let index = 0;

const NameSelection=({nameState,setName,nameList,setNameList})=> {
  const {items, name} = nameState

  const onNameChange= (event) => {
    setName({...nameState, name: event.target.value});
  };

  const addItem = () => {
    setName({
      ...nameState,
      items: [...items, name || `New item ${index++}`],
      name: '',
    });
  };

  const removeItem = () => {
    setName({
      ...nameState,
      items: [],
      name: '',
    });
  }

  const onNameSelect= (e) =>{
    setNameList({...nameList, items: e})
  }
  return (
    <Select
      mode="multiple"
      style={{ width: 240 }}
      placeholder="命名"
      onChange={(e)=>onNameSelect(e)}
      dropdownRender={menu => (
        <div>
          {menu}
          <Divider style={{ margin: '4px 0' }} />
          <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
            <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
            <div style={{flexDirection:'column'}}>
              <a
                onClick={addItem}
              >
                <PlusOutlined />新增命名
              </a>
              <a style={{marginLeft:14}} onClick={removeItem}>清除命名</a>
            </div>

          </div>
        </div>
      )}
    >
      {items.map(item => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
  );

}
export default NameSelection

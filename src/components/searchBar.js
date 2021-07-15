import React,{useState, useEffect} from 'react'
import styles from "../App.module.scss";
import { Tag, Select, Input, Button,message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import rule from './rule'
import NameSelection from "./NameSelection";


const { Option } = Select;

function checkPicture(selectStyle,selectType,fileList,setResult,size,sizeListState,nameState) {
  let getRule = rule[''+selectStyle + selectType]

  if(fileList.length <= 0){
    message.error('請先上傳照片')

  }else {
    if(typeof getRule === 'object'){
      let getRuleName = sizeListState.filter(item=> {
        return item.id === size
      })
      if(getRule[getRuleName[0].name] === fileList[0].size){
        setResult(true)
      }else {
        setResult(false)
      }
    }else {
      if(getRule === fileList[0].size){
        setResult(true)
      }else {
        setResult(false)
      }
    }
  }
}



const SearchBar = (props) =>{

    const {fileList, state, stateStyle, setResult, sizeListState, nameState, setName} = props
    const [selectStyle, setSelectStyle] = useState('')
    const [selectType, setSelectType] = useState('')
    const [size, sizeSelect] = useState('')

    return(
        <div className={styles.searchWrapper}>
            <div style={{margin:10}}>
                <Select className={styles.style} placeholder="風格" onChange={(e)=>setSelectStyle(e)}>
                  {
                    stateStyle.map(item =>{
                      return(
                        <Option value={item.id} key={item.id}>
                          {item.name}
                        </Option>
                      )
                    })
                  }
                </Select>
            </div>
            <div style={{margin:10}}>
                <Select className={styles.type} placeholder="類型" onChange={(e)=>setSelectType(e)}>
                {
                    state.map(item =>{
                        return(
                            <Option value={item.id} key={item.id}>
                                {item.name}
                            </Option>
                        )
                    })
                }
            </Select>
            </div>
          <div style={{margin:10}}>
                <Select className={styles.type} placeholder="大小" onChange={(e)=>sizeSelect(e)}>
                {
                  sizeListState.map(item =>{
                        return(
                            <Option value={item.id} key={item.id}>
                                {item.name}
                            </Option>
                        )
                    })
                }
            </Select>
            </div>
            <div style={{margin:10}}>
              <NameSelection nameState={nameState} setName={setName} />
            </div>
            <div style={{margin:10}}><Button onClick={()=>checkPicture(selectStyle,selectType,fileList,setResult,size,sizeListState,nameState)}>開始檢測</Button></div>
        </div>
    )
}

export default SearchBar

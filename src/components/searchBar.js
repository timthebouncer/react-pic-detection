import React,{useState} from 'react'
import styles from "../App.module.scss";
import { Select, Input, Button } from 'antd';
import rule from './rule'


const { Option } = Select;

function checkPicture(selectStyle,selectType,fileList,setResult,size,sizeListState) {
  let getRule = rule[''+selectStyle + selectType]

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


const SearchBar = (props) =>{
    const {fileList, state, stateStyle, setResult, sizeListState} = props
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
            <div style={{margin:10}}><Input placeholder={"命名"} /></div>
            <div style={{margin:10}}><Button onClick={()=>checkPicture(selectStyle,selectType,fileList,setResult,size,sizeListState)}>開始檢測</Button></div>
        </div>
    )
}

export default SearchBar

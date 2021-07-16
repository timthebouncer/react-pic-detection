import React,{useState, useEffect} from 'react'
import styles from "../App.module.scss";
import { Select, Input, Button,message } from 'antd';
import rule from './rule'
import NameSelection from "./NameSelection";


const { Option } = Select;

function checkPicture(selectStyle,selectType,fileList,setResult,size,sizeListState,nameList) {
  let getRule = rule[''+selectStyle + selectType]
  console.log(nameList.items,6699)
  const {items} = nameList

  if(fileList.length <= 0){
    message.error('請先上傳照片')

  }else {
    console.log(fileList[0].name)
    let isName = items.some(item => item === fileList[0].name)
    if(isName){
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
    }else {
     message.error("命名不匹配")
    }
  }
}



const SearchBar = (props) =>{

    const {fileList, state, stateStyle, setResult, sizeListState, nameState, setName, nameList, setNameList} = props
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
              <NameSelection nameState={nameState} setName={setName} nameList={nameList} setNameList={setNameList} />
            </div>
            <div style={{margin:10}}><Button onClick={()=>checkPicture(selectStyle,selectType,fileList,setResult,size,sizeListState,nameList)}>開始檢測</Button></div>
        </div>
    )
}

export default SearchBar

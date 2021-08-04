import React,{useState, useEffect} from 'react'
import styles from "../App.module.scss";
import {Select, Input, Button, message, ImageProps} from 'antd';
import rule from './rule'
import NameSelection from "./NameSelection";
import UploadFun from "./Upload";


const { Option } = Select;





const SearchBar = (props) =>{

    const {fileList,setFileList, state, stateStyle, sizeListState, nameState, setName, nameList, setNameList,imgHeight,imgWidth} = props
    const [selectStyle, setSelectStyle] = useState('')
    const [selectType, setSelectType] = useState('')
    const [size, sizeSelect] = useState('')

  const checkPicture = () =>{

    const {items} = nameList

    let data = [...fileList]

    let getRule = rule[''+selectStyle + selectType]


    if(fileList.length <= 0){
      message.error('請先上傳照片')
    }else {
      data = data.map((item,idx) =>{
        let getName = items.filter(name => {
          return item.name.includes(name)
        })

        let getRuleName = sizeListState.filter(item=> {
          return item.id === size
        })
        console.log(getRule[getRuleName[0].name])
        if(getName.length && typeof getRule === 'object' && (getRule[getRuleName[0].name] === imgHeight * imgWidth)){
          return {
            ...item,
            isPass:true
          }
        }else if(getName.length && getRuleName.length === 0){
          if(getRule === imgHeight * imgWidth)
          return {
            ...item,
            isPass: true
          }
          return{
            ...item,
            isPass:false
          }
        }else {
          return {
            ...item,
            isPass: false
          }
        }

      })
      setFileList(data)
    }
  }
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
            <div style={{margin:10}}><Button onClick={checkPicture}>開始檢測</Button></div>
        </div>
    )
}

export default SearchBar

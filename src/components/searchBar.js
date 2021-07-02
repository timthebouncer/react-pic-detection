import React,{useState} from 'react'
import styles from "../App.module.scss";
import { Select, Input } from 'antd';

const { Option } = Select;


const SearchBar = (props) =>{
    const {state} = props
    return(
        <div className={styles.searchWrapper}>
            <div style={{margin:10}}>
                <Select className={styles.style} placeholder="風格">
                    <Option>
                    </Option>
                </Select>
            </div>
            <div style={{margin:10}}>
                <Select className={styles.type} placeholder="類型">
                {
                    state.map(item =>{
                        return(
                            <Option value={item.id}>
                                {item.name}
                            </Option>
                        )
                    })
                }
            </Select>
            </div>
            <div style={{margin:10}}><Input placeholder={"命名"} /></div>
            <div style={{margin:10}}><button>開始檢測</button></div>
        </div>
    )
}

export default SearchBar
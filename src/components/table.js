import styles from "../App.module.scss";
import React,{useState} from 'react'


const Table = (props) =>{
    console.log(props,'Table')
    return(
        <div style={{marginBottom:50}}>
            <table className={styles.contentWrapper}>
                <thead>
                <tr>
                    <th>名稱</th>
                    <th>尺寸</th>
                    <th>格式</th>
                    <th>結果</th>
                </tr>
                </thead>
                <tbody style={{ textAlign: 'center'}}>
                {
                    props.state.map(item =>{
                        return(
                            <tr key={item.uid}>
                                <td>{item.name}</td>
                                <td>{item.size}</td>
                                <td>{item.type}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}

export default Table
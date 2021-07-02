import styles from './App.module.scss';
import React,{useState,useEffect} from 'react'
import SearchBar from './components/searchBar'
import Table from './components/table'
import  UploadFun from './components/Upload'


const typeList = [{id:1,name:'真人'},{id:2,name:'電子'},{id:3,name:'體育'},
    {id:4,name:'彩票'},{id:5,name:'棋牌'},{id:6,name:'電競'},{id:7,name:'捕魚'}]


function App() {

    const [state, setState] = useState([]);
    const [fileList, setFileList] = useState([])
    useEffect(
        function () {
            setTimeout(function () {
                setFileList(fileList);
                setState(typeList);
            }, 100);
        }, []);


  return (
    <div className={styles.App}>
        <div className={styles.container}>
            <SearchBar state={state} />
            <Table state={fileList} setState={setFileList} />
            <div className={styles.uploadWrapper}>
                <UploadFun fileList={fileList} setFileList={setFileList} />
            </div>
        </div>
    </div>
  );
}

export default App;

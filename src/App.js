import styles from './App.module.scss';
import React,{useState,useEffect} from 'react'
import SearchBar from './components/searchBar'
import Table from './components/table'
import  UploadFun from './components/Upload'


const typeList = [{id:1,name:'真人'},{id:2,name:'電子'},{id:3,name:'體育'},
    {id:4,name:'彩票'},{id:5,name:'棋牌'},{id:6,name:'電競'},{id:7,name:'捕魚'}]

const styleList = [{id:1,name:'綜包PC圖'},{id:2,name:'綜包PC圖 - 國際化'},{id:3,name:'棋牌內頁圖'},{id:4,name:'綜包H5/APP'},
  {id:5,name:'綜包H5/APP-國際化'},{id:6,name:'綜包H5/APP-V5'},{id:7,name:'501'},{id:8,name:'熱門圖'},{id:9,name:'角標圖'},
  {id:10,name:'V5-LOGO'},{id:11,name:'黑奢風熱門圖'},{id:12,name:'黑奢風廠商圖'},{id:13,name:'黑奢風二級圖標'},
  {id:14,name:'中國風熱門圖'},{id:15,name:'中國風二級圖標'},{id:16,name:'水晶風熱門圖'},{id:17,name:'水晶風二級圖標'},{id:18,name:'二級廠商LOGO'},
  {id:19,name:'廠商圖'},{id:20,name:'熱門圖'},{id:21,name:'二級圖標'},{id:22,name:'一級廠商LOGO'},{id:23,name:'水晶風V5圖標'},
]
const sizeList = [{id:1,name:'iOS-2x'},{id:2,name:'iOS-3x'},{id:3,name:'android-2x'},{id:4,name:'android-3x'},
  {id:5,name:'xxhdpi'},{id:6,name:'xxxhdpi'},{id:7,name:'2x'},{id:8,name:'3x'}
]


function App() {

    const [state, setState] = useState([]);
    const [stateStyle, setStyle] = useState([])
    const [sizeListState, setSizeList] = useState([])
    const [fileList, setFileList] = useState([])
    const [nameState, setName] = useState({ items: [], name: ''})
    const [nameList, setNameList] = useState([])
    const [imgWidth, setImgWidth] = useState('')
    const [imgHeight, setImgHeight] = useState('')
    useEffect(
        function () {
                // setFileList(fileList);
                setState(typeList);
                setStyle(styleList)
                setSizeList(sizeList)
        }, [fileList]);


  return (
    <div className={styles.App}>
        <div className={styles.container}>
            <SearchBar fileList={fileList} setFileList={setFileList}  state={state} stateStyle={stateStyle} sizeListState={sizeListState}
                       nameState={nameState} setName={setName}
                       nameList={nameList} setNameList={setNameList}
                       imgHeight={imgHeight} imgWidth={imgWidth}

            />
            <Table state={fileList} setState={setFileList} />
            <div className={styles.uploadWrapper}>
                <UploadFun fileList={fileList} setFileList={setFileList} setImgWidth={setImgWidth}
                           setImgHeight={setImgHeight} />
            </div>
        </div>
    </div>
  );
}

export default App;

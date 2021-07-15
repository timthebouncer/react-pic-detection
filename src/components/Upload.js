import React,{useState, useEffect} from 'react'
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 0);
};
// function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         console.log(5656565)
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// }



const UploadFun=(props)=> {
    const {fileList, setFileList} = props


    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    return (
        <div>
            {/*<ImgCrop rotate>*/}
                <Upload
                    customRequest={dummyRequest}
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    multiple
                >
                    {fileList.length < 5 && '+ Upload'}
                </Upload>
            {/*</ImgCrop>*/}
        </div>
    )
}
export default UploadFun;

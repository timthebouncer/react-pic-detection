import React, {useState, useEffect} from 'react'
import {Upload, message} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

const dummyRequest = ({file, onSuccess}) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

const UploadFun = (props) => {
  const {fileList, setFileList} = props


  const onChange = ({fileList: newFileList}) => {

    setFileList(()=>{
      return newFileList.map((item) => ({
            ...item,
            isPass: null
          }
        )
      )
    });
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

import React, {useState, useEffect} from 'react'
import {Upload, message} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';


const UploadFun = (props) => {
  const {fileList, setFileList, setImgWidth, setImgHeight,getSize, setSize} = props
  const onData = async file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result
      img.onload = () => {
        const e = {...file}
        const naturalHeight = img.naturalHeight;
        const naturalWidth = img.naturalWidth;
        setImgWidth(naturalWidth)
        setImgHeight(naturalHeight)
        getSize.push({id:e.uid,calWidthHeight: naturalWidth * naturalHeight})
        setSize(getSize)
        for (let key in file) {
          e[key] = file[key]
        }
        e.isPass = null
        e.widthHeight = `${naturalWidth} x ${naturalHeight}`
        e.url = reader.result
        setFileList(f=> [...f, e])
      }
    }
  }
  const onRemove = ({uid}) => {
    const i = fileList.findIndex(e => e.uid === uid)
    if (i !== -1) {
      setFileList(e => [...e.slice(0, i), ...e.slice(i + 1, e.length)])
      setSize(e => [...e.slice(0, i), ...e.slice(i + 1, e.length)])
    }
  }

  return (
    <div>
      <Upload
        // customRequest={dummyRequest}
        listType="picture-card"
        data={onData}
        fileList={fileList}
        onRemove={onRemove}
        multiple
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </div>
  )
}
export default UploadFun;

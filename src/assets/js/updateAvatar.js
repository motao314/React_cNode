import ReactDOM from "react-dom";
import React, { useCallback, useRef, useState } from "react";
import { Modal, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import api from "./api";
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJpgOrPng) {
        message.error('请上传后缀为 JPG/PNG 的图片!');
    }
    if (!isLt2M) {
        message.error('文件大小不能超过 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
function AvatarUpdate({afterClos,user,setAvatar}) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [visible, setVisible] =  useState(true);
    const file = useRef();
    const infoMessage = useRef();
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const toHidden = useCallback(()=>{
        setVisible(false);
    },[]);
    const toOk = useCallback(()=>{
        //console.log(file.current);
        if(file.current){
            infoMessage.current = message.info("头像上传中，请稍等",0);
            api.updateAvatar({authorization:user.authorization,avatar:file.current})
            .then(res=>{
                //console.log(res.data.results);
                setAvatar(res.data.results);
                infoMessage.current();
                setVisible(false);
            })
        } else {
            message.warning("请正确上传头像");
        }
    },[file.current])
    return <Modal
        icon={null}
        closable={true}
        okText="上传"
        cancelText="取消"
        title="请上传头像"
        visible={visible}
        onCancel={toHidden}
        afterClose={afterClos}
        onOk={toOk}
    >
        <Upload
            beforeUpload={beforeUpload}
            listType={"picture-card"}
            className="avatar-update"
            onChange={info => {
                if (info.file.status === 'uploading') {
                    setLoading(true);
                    return;
                }
                if (info.file.status === 'done') {
                    // Get this url from response in real world.
                    getBase64(info.file.originFileObj, imageUrl => {
                        setLoading(false);
                        setImageUrl(imageUrl);
                    });
                    file.current = info.file.originFileObj; 
                }
            }}
            showUploadList={false}
            maxCount={1}
        >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
    </Modal>
}
export default (user,setAvatar) => {
    const div = document.createElement("div");
    const afterClos = ()=>{
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    };
    document.body.appendChild(div);
    ReactDOM.render(
        <AvatarUpdate 
            afterClos={afterClos}
            user={user}
            setAvatar={setAvatar}
        />,
        div
    );
}
import React, { useState } from "react";
import {Modal} from "antd";
import setAvatar from "../assets/js/avatar";
import { toNow } from "../assets/js/date";
import updateAvatar from "../assets/js/updateAvatar";
const AvatarPopup = ({user,setAvatarSrc,visible,setVisible})=>{
    //console.log(user.avatar);
    const content = <>
        <div className="setting-avatar">
            {setAvatar({src:user.avatar,size:80,shape:"square"})}
            <a 
                className="setting-avatar-mask"
                onClick={()=>{
                    updateAvatar(user,setAvatarSrc);
                }}
            >上传头像</a>
        </div>
        <p className="setting-user-info">
            <span>用户名：{user.username}</span>
            <span>注册时间：{toNow(user.createdAt)}</span>
        </p>
    </>;
    return <Modal 
        icon={null}
        closable={true}
        footer={null}
        title="用户信息"
        visible={visible}  
        onCancel={()=>{
            setVisible(false);
        }}
    >
        {content}
    </Modal>
}
export default AvatarPopup;
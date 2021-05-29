import { Card, Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { toNow } from "../assets/js/date";
import Aside from "../components/aside";
import useAvatar from "../hooks/avatar";

export default function() {
    const avatar = useAvatar();
    const dispatch = useDispatch();
    const {id} = useParams();
    const userInfo = useSelector(state=>state.userInfo);
    useEffect(()=>{
        dispatch({
          type: "userInfo/getData",
          id
        })
    },[])  
    return (
        <>
          <div className="pageMain">
              <Card className="contentBox">
                  <div>
                      <div>
                          {avatar({src:userInfo.avatar,size:80})}
                          <span>上传新头像</span>
                      </div>
                  </div>          
                  <Row>
                    <Col offset={6} span={6}>{userInfo.username}</Col>
                    <Col span={6}>注册时间：{toNow(userInfo.createdAt)}</Col>
                  </Row>
              </Card>
              <Card 
                className="contentBox"
                title={"发表的话题"}
              >

              </Card>
          </div>
          <Aside />
        </>
    );
  }
  
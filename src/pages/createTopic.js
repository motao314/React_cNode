import Aside from "../components/aside";
import { Button, Card, Dropdown, Menu, Input, message } from "antd";
import { DownOutlined } from '@ant-design/icons';
import MdEditor from "../components/mdEditor";
import useTabs from "../hooks/useTabs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import style from "./createTopic.css";
import htmlToMd from "../assets/js/htmlToMd";
import api from "../assets/js/api";
import useUser from "../hooks/useUser";
import { useHistory } from "dva";
export default function () {
  const [editState,setEditState] = useState(false);
  const categories = useTabs();
  const {push, block} = useHistory();
  const unBlock = useRef();
  let tabs = useMemo(() => {
    if (categories.length) {
      return categories.filter(item => item.id)
    }
    return [];
  }, [categories]);
  const [nowTab, setNowTab] = useState(tabs[0]);
  const [title,setTitle] = useState("");
  const titleHandler = useCallback(({target})=>{
    setTitle(target.value);
  },[]);
  const menu = useMemo(() => {
    return <Menu>
      {tabs.map(item => {
        return <Menu.Item
          key={item.id}
          onClick={() => {
            setNowTab(item);
          }}
        >{item.name}</Menu.Item>
      })}
    </Menu>
  }, [tabs]);
  const user = useUser();
  useEffect(() => {
    setNowTab(tabs[0]);
  }, [tabs]);
  useEffect(()=>{
    unBlock.current = block(()=>{
      return "离开当前页面会导致，填写信息丢失"
    });
    return ()=>{
      unBlock.current();
    }
  },[])
  return (
    <>
      <div className="pageMain">
        <Card
          title={"发表新话题"}
          type="inner"
          className="contentBox"
        >
          <div className={style.rows}>
            选择分类：<Dropdown
              arrow={true}
              overlay={menu}
            >
              <Button>{nowTab ? nowTab.name : ""} <DownOutlined /></Button>
            </Dropdown>
          </div>
          <div className={style.rows}>
              <Input 
                value={title} 
                maxLength={40}
                onChange = {titleHandler}
                placeholder={"请输入主题标题"}
              />
          </div>
          <MdEditor 
            className={style.editor}
            fnSubmit={async (val,setValue)=>{
              if(editState){
                return ;
              }
              if(!title.trim()){
                message.error('请输入主题标题');
                return ;
              }
              console.log(val);
              if(!val.trim()){
                message.error('请输入主题内容');
                return ;
              }
              val = htmlToMd(val);
              try{
                let res = await api.createTopic({
                  title,
                  content: val,
                  categoryId: nowTab.id,
                  authorization: user.authorization
                });
                setEditState(true);
                unBlock.current();
                message.success("发表成功正在跳转中……",3,()=>{
                  push(`/topic/`+res.data.results.id)
                })
              } catch(err){
                message.error("网络中断,请您稍后再尝试");
              }
            }}
          />
        </Card>
      </div>
      <Aside
        showUserInfo={false}
      />
    </>
  );
}

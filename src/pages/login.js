import Aside from "../components/aside";
import useBreadcrumb from "../hooks/breadcrumb";
import { Button, Card, Form, Input, message } from "antd";
import { useFormLayout, useFormLayoutBtn } from "../hooks/formLayout";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function () {
  const Breadcrumb = useBreadcrumb("登陆");
  const layout = useFormLayout();
  const btnLayout = useFormLayoutBtn();
  const {loading,user} = useSelector(state=>state);
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = ({username,password})=>{
    if(loading.global&&user.status!==1){
        return ;
    }
    dispatch({
      type: "user/login",
      username,
      password
    });
  };
  useEffect(()=>{
    return ()=>{
      dispatch({
        type:"user/init"
      })
    }
  },[dispatch])
  useEffect(()=>{
    if(loading.global){
      return ;
    }
    if(user.status === 2){
      message.error(user.error?user.error:"网络故障，请稍后重试",1);
    } else if(user.status === 1){
      setTimeout(() => {
        if(history.action === "REPLACE"){
           history.replace(user.prevPath?user.prevPath:"/"); 
        } else if(history.action === "PUSH"){
           history.goBack();
        } else {
           history.replace("/"); 
        }  
      }, 2000);
      message.success("登陆成功，正在跳转",2);
    }
  },[history, loading.global, user]);
  return (
    <>
      <div className="pageMain">
        <Card
          type={"inner"}
          title={Breadcrumb}
        >
          <Form
            {...layout}
            onFinish={onFinish}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="注册密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...btnLayout}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading.global}
              >登陆</Button>
              <Button type="link" htmlType="button">
                <Link to="/register">没有账号！去注册</Link>
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <Aside />
    </>
  );
}

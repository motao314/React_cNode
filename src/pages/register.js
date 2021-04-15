import { Button, Card, Form, Input, message } from "antd";
import Aside from "../components/aside";
import useBreadcrumb from "../hooks/breadcrumb";
import { useFormLayout, useFormLayoutBtn } from "../hooks/formLayout";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
export default function () {
  const Breadcrumb = useBreadcrumb("注册");
  const layout = useFormLayout();
  const btnLayout = useFormLayoutBtn();
  let { loading, register } = useSelector(state => state);
  const dispatch = useDispatch();
  const { replace } = useHistory();
  const onFinish = useCallback((val) => {
    if (loading.global || register.status === 1) {
      return;
    }
    dispatch({
      type: "register/register",
      ...val
    })
  }, [dispatch, loading.global, register.status]);

  useEffect(() => {
    return () => {
      if (register.status > 0) {
        dispatch({
          type: "register/init"
        })
      }
    }
  });
  const msg = () => {
    if (register.status === 1) {
      setTimeout(() => {
        replace("/login");
      }, 1000);
      return message.success("注册成功即将跳转");

    }
    if (register.status === 2) {
      return message.error(register.error);
    }
    return null;
  }
  msg();
  return (
    <>
      <article className="pageMain">
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
            <Form.Item
              label="重复密码"
              name="repassword"
              rules={[{ required: true, message: '请重新输入密码' }, ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次密码输入不一样'));
                },
              })]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...btnLayout}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading.global}
              >注册</Button>
              <Button type="link" htmlType="button">
                <Link to="/login">已有账号！去登陆</Link>
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </article>
      <Aside />
    </>
  );
}

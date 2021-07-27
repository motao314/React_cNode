import { Card, Col, Row } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { toNow } from "../assets/js/date";
import style from "./user.css";
import Aside from "../components/aside";
import useAvatar from "../hooks/avatar";
import LoadMoreList from "../components/LoadMoreList";

export default function () {
  const avatar = useAvatar();
  const dispatch = useDispatch();
  const { id } = useParams();
  const userInfo = useSelector(state => state.userInfo);
  const { loading, userArticles, userReplys } = useSelector(state => state);
  const userArticlesLoading = loading.models ?loading.models.userArticles:false;
  const userArticlesLoadMore = useCallback(() => {
      if (userArticlesLoading) {
        return;
      }
      dispatch({
        type: "userArticles/getData",
        userId: id,
        page: userArticles.page + 1,
        limit: userArticles.limit
      });
  }, [userArticlesLoading,userArticles]);
  const userReplysLoading = loading.models ?loading.models.userReplys:false;
  const userReplysLoadMore = useCallback(() => {
      if (userReplysLoading) {
        return;
      }
      dispatch({
        type: "userReplys/getData",
        userId: id,
        page: userReplys.page + 1,
        limit: userReplys.limit
      });
  }, [userReplysLoading,userReplys])
  useEffect(() => {
    dispatch({
      type: "userInfo/getData",
      id
    })
    return ()=>{
      dispatch({
        type: "userArticles/reset"
      });
      dispatch({
        type: "userReplys/reset"
      })
    }
  }, []);
  return (
    <>
      <div className="pageMain">
        <Card className="contentBox">
          <div className={style.avatar}>
            {avatar({ src: userInfo.avatar, size: 80 })}
          </div>
          <Row className={style.userInfo}>
            <Col offset={4} span={8} className={style.userInfo1}>用户名：{userInfo.username}</Col>
            <Col span={8} className={style.userInfo2}>注册时间：{toNow(userInfo.createdAt)}</Col>
          </Row>
        </Card>
        <Card
          className="contentBox"
          title={"发表的话题"}
        >
          <LoadMoreList
            data={userArticles}
            loading={userArticlesLoading}
            loadMoreFn={ userArticlesLoadMore}
          />
        </Card>
        <Card
          className="contentBox"
          title={"参与的话题"}
        >
          <LoadMoreList
            data={userReplys}
            loading={userReplysLoading}
            loadMoreFn={ userReplysLoadMore}
          />
        </Card>
      </div>
      <Aside />
    </>
  );
}

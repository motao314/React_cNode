import { Button, Card } from "antd";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { toNow } from "../assets/js/date";
import Aside from "../components/aside";
import MarkdownText from "../components/markdownText";
import MdEditor from "../components/mdEditor";
import useAvatar from "../hooks/avatar";
import useTag from "../hooks/tag";
import useUser from "../hooks/useUser";
import style from "./topic.css";
import ReplyList from "./topicCmp/replyList";
export default function() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {article,loading,replyList} = useSelector(state=>state);
    const {avatar,category_id,createdAt,isTop,title,userId,username,content} = article;
    const tag = useTag();
    const setAvatar = useAvatar();
    const user = useUser();
    const articleTitle = useMemo(()=>{
      return article.title?(<div>
            <h2>{title}</h2>
            <div style={{display:"flex",alignItems:"center"}}>
                {tag({isTop,categoryId:category_id})}
                <Link to={"/user/"+userId} style={{
                    marginLeft: 10
                  }}>
                  {setAvatar({src:avatar})}<span style={{
                    marginLeft: 5
                  }}>{username}</span>
                </Link>
                <span style={{marginLeft:"5px"}}>发表于：{toNow(createdAt)}</span>
            </div>
        </div>):""
    },[article]);
    useEffect(()=>{
      dispatch({
        type: "article/getData",
        id
      });
      dispatch({
        type:"replyList/getData",
        page: 1,
        limit: 5,
        articleId: id
      });
    },[id]);
    return (
      <>
        <div className="pageMain">
            <Card
              loading={loading.models.article}
              title={articleTitle}
            >
              {content?<MarkdownText>{content}</MarkdownText>:""}
            </Card>  
            <Card
              title={"发表评论"}
              type="inner"
              className="contentBox"
            >
              <MdEditor className={style.replyEdtor} user={user} >
                {user?<></>:<div className={style.mask}>
                    <Link to="/register" className={style.replyBtn}>
                      <Button
                        type="primary"
                      >注册</Button>
                    </Link>
                    <Link to="/login" className={style.replyBtn}>
                      <Button
                        type="primary"
                      >登录</Button>
                    </Link>
                  </div>}
              </MdEditor>
            </Card>
            <ReplyList 
                data={replyList}
                articleId={id}
                loading={loading}
            />
        </div>
        <Aside />
      </>
    );
  }
  
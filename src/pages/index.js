import styles from './index.css';
import {List, Row, Col} from "antd"
import qs from "qs";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import IndexNav from './indexCmp/indexNav';
import {toNow} from "../assets/date";
import useTag from '../hooks/tag';


export default function({location}) {
  const {search} = location;
  const {categoryId="0",page="1"} = qs.parse(search.substr(1));
  const {articles,loading,categories} = useSelector(state=>state);
  const dispatch = useDispatch();
  const setTag = useTag();
  useEffect(()=>{
    dispatch({
      type:"categories/getData"
    });
  },[dispatch])
  useEffect(()=>{
      dispatch({
        type:"articles/getData",
        categoryId,
        page
      })
  },[categoryId, dispatch, page]);
  return (
      <>
        <article className="pageMain">
            <IndexNav 
                data={categories}
                categoryId={categoryId}
            />
            <List 
              loading={loading.models.articles}
              dataSource={articles.articles}
              renderItem={item=>{
                console.log(item);
                return <List.Item>
                    <Row>
                      <Col>用户</Col>
                      <Col>回复</Col>
                      <Col>{setTag(item)} 文章</Col>
                      <Col>{toNow(item.createdAt)}</Col>
                    </Row>
                </List.Item>
              }}
            />
        </article>
        <aside className="pageAside">

        </aside>
      </>
  );
}

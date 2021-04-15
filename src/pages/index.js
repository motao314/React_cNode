import styles from './index.css';
import {List, Row, Col, Pagination} from "antd"
import qs from "qs";
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from "react-router-dom"
import { useEffect } from 'react';
import IndexNav from './indexCmp/indexNav';
import {toNow} from "../assets/date";
import useTag from '../hooks/tag';
import useAvatar from '../hooks/avatar';
import Aside from '../components/aside';


export default function({location}) {
  const {search} = location;
  const {categoryId="0",page="1"} = qs.parse(search.substr(1));
  const {articles,loading,categories} = useSelector(state=>state);
  const dispatch = useDispatch();
  const setTag = useTag();
  const setAvatar = useAvatar();
  const {push} = useHistory();
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
        <article className={"pageMain "+styles.main}>
            <IndexNav 
                data={categories}
                categoryId={categoryId}
            />
            <List 
              loading={loading.models.articles}
              dataSource={articles.articles}
              className={styles.list}
              renderItem={item=>{
                return <List.Item>
                    <Row className={styles.listItem}>
                      <Col span={2} className={styles.listAvatar}>
                          <Link to={`/user/`} title={item.username}>{setAvatar({src:item.avatar,size:30})}</Link>
                      </Col>
                      <Col span={2} className={styles.listCounts}>{item.replyCount}/{item.viewCount}</Col>
                      <Col span={16} className={styles.listTitle}>{setTag(item)} <Link to={`/topic/${item.id}`}>{item.title}</Link></Col>
                      <Col span={4} className={styles.listDate}>{toNow(item.createdAt)}</Col>
                    </Row>
                </List.Item>
              }}
            />
            <Pagination 
                current={Number(page)}
                pageSize={articles.limit}
                total={articles.count}
                className={styles.pagination}
                onChange={page=>{
                  push(`/?categoryId=${categoryId}&page=${page}`);
                }}  
                showSizeChanger={false}
            />
        </article>
        <Aside />
      </>
  );
}

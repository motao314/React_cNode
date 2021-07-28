import {useEffect, useMemo} from "react";
import {Button,List,Row,Col} from "antd";
import useAvatar from "../hooks/avatar";
import { toNow } from "../assets/js/date";
import { Link } from "react-router-dom";
import useTag from "../hooks/tag";
import styles from "../pages/index.css";
export default ({id,loading, data, loadMoreFn}) => {
    const setAvatar = useAvatar();
    const setTag = useTag();
    const loadMore = useMemo(() => {
        if (data.page >= data.pages) {
            return null;
        }
        return <div style={{
            textAlign: "center",
            padding: "10px 0"
        }}>
            <Button onClick={loadMoreFn}>加载更多</Button>
        </div>
    }, [data.page, data.pages, loadMoreFn]);
    useEffect(()=>{
        loadMoreFn();
    },[id]);
    return <List
        dataSource={data.articles}
        loadMore={loadMore}
        loading={loading}
        renderItem={item => {
            return <List.Item>
            <Row className={styles.listItem}>
              <Col span={2} className={styles.listAvatar}>
                  <Link to={`/user/${item.userId}`} title={item.username}>{setAvatar({src:item.avatar,size:30})}</Link>
              </Col>
              <Col span={2} className={styles.listCounts}>{item.replyCount}/{item.viewCount}</Col>
              <Col span={16} className={styles.listTitle}>{setTag(item)} <Link to={`/topic/${item.id}`}>{item.title}</Link></Col>
              <Col span={4} className={styles.listDate}>{toNow(item.createdAt)}</Col>
            </Row>
        </List.Item>
        }}
    />
}
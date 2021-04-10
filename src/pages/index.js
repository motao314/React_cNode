import Nav from '../components/nav';
import styles from './index.css';
import {indexNav} from "../assets/navData"
import qs from "qs";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
export default function({location}) {
  const {search} = location;
  const {tab="all",page="1"} = qs.parse(search.substr(1));
  const {articles,loading} = useSelector(state=>state);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch({
        type:"articles/getArticles",
        tab,
        page
      })
  },[tab, page, dispatch])
  return (
      <>
        <article className="pageMain">
            <Nav
              data={indexNav}
              theme="light"
              getKey={()=>{
                return indexNav.findIndex(item=>tab===qs.parse(item.to.substr(2)).tab);
              }} 
            />
        </article>
        <aside className="pageAside">

        </aside>
      </>
  );
}

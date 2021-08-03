import { Affix, Layout } from "antd";
import style from "./index.css";
import {Link} from "react-router-dom";
import Nav from "../components/nav";
import { navs } from "../assets/js/navData";
import LoginNav from "../components/loginNav";
function BasicLayout({location,children}) {
  const {pathname} = location;
  return (
    <Layout className={style.page}>
      <Affix offsetTop={0}>
          <Layout.Header>
            <div className="wrap">
              <h1 id={style.logo}><Link to="/">花果山</Link></h1>
              <Nav 
                data={navs}
                theme="dark"
                getKey={()=>{
                  return navs.findIndex(item=>(item.to===pathname))
                }}
                className={style.nav}
              /> 
              <LoginNav className={style.loginNav} />
            </div>
          </Layout.Header>
      </Affix>
      <Layout.Content className={style.content+" wrap"}>
           {children}     
      </Layout.Content>
      <Layout.Footer className="wrap footer">
          <p>源码下载地址by <a href="https://github.com/motao314/React_cNode" target="https://github.com/motao314/React_cNode">https://github.com/motao314/React_cNode</a></p>
      </Layout.Footer>
    </Layout>
  );
}

export default BasicLayout;

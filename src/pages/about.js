import { Card } from "antd";
import Aside from "../components/aside";

export default function() {
    return (
        <>
          <div className="pageMain">
              <Card 
                title={"开课吧-花果山前端团队"}
              >
                <p>拥抱太阳，满满的正能量的花果山团队，目前以开课吧教研团队为主体，团队致力于前端技术的分享及推广。</p>
                <p>Github：<a href="https://github.com/hug-sun">https://github.com/hug-sun</a></p>
                <p>Element3：<a href="https://github.com/hug-sun/element3">https://github.com/hug-sun</a></p>
                <p>团队成员：<a href="https://github.com/orgs/hug-sun/people">https://github.com/orgs/hug-sun/people</a></p>
                <p>加入花果山：参与花果山的开源项目，即可有机会加入花果山前端团队</p>
              </Card>
              <Card 
                title={"加入开课吧教研团队"}
                className="contentBox"
              >
                <dl>
                  <dt>高级助教</dt>
                  <dd>- 有3年左右前端开发相关工作经验；</dd>
                  <dd>- 大学本科及以上学历，技术强可忽略；</dd>
                  <dd>- 有较强沟通、表达能力；</dd>
                  <dd>- 有在线教育相关工作经验优先；</dd>
                  <dd>- 热爱技术、热爱学习。</dd>
                </dl>
                <dl>
                  <dt>WebGL 高级讲师</dt>
                  <dd>- 具备 WebGl 或 ThreeJs 商业项目经验</dd>
                  <dd>- 具备Echarts、AntV、d3中任一可视化库实际开发经验</dd>
                  <dd>- 可熟练掌握Three.js或Cesium</dd>
                  <dd>- 有良好数学功底，可熟练掌控矩阵算法</dd>
                  <dd>- 加分项： React 和 TypeScript</dd>
                  <dd>- 热爱教育行业，对学员的学习结果负责</dd>
                </dl>
              </Card>
          </div>
          <Aside 
            showUserInfo={false}
          />
        </>
    );
  }
  
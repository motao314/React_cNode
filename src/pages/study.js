import { Card } from "antd";
import Aside from "../components/aside";

export default function () {
  return (
    <>
      <div className="pageMain">
        <Card
          title={"学习资源"}
        >
          <dl>
            <dt>掘金文章</dt>
            <dd>花果山技术团队：<a href="https://juejin.cn/user/1626932942485959">https://juejin.cn/user/1626932942485959</a></dd>
            <dd>Mr_无忧：<a href="https://juejin.cn/user/2400989124769774">https://juejin.cn/user/2400989124769774</a></dd>
            <dd>大帅老猿：<a href="https://juejin.cn/user/2955079655898093">https://juejin.cn/user/2955079655898093</a></dd>
            <dd>全栈然叔：<a href="https://juejin.cn/user/1978776660216136">https://juejin.cn/user/1978776660216136</a></dd>
            <dd>前端bubucuo：<a href="https://juejin.cn/user/3878732755375742">https://juejin.cn/user/3878732755375742</a></dd>
            <dd>花果山大圣：<a href="https://juejin.cn/user/1556564194370270">https://juejin.cn/user/1556564194370270</a></dd>
          </dl>
          <dl>
            <dt>B站视频</dt>
            <dd>花果山-大圣：<a href="https://space.bilibili.com/26995758"></a>https://space.bilibili.com/26995758</dd>
            <dd>花果山学院：<a href="https://space.bilibili.com/1739153818">https://space.bilibili.com/1739153818</a></dd>
            <dd>大帅老猿：<a href="https://space.bilibili.com/422646817">https://space.bilibili.com/422646817</a></dd>
            <dd>全栈然叔：<a href="https://space.bilibili.com/478824720">https://space.bilibili.com/478824720</a></dd>
            <dd>Young村长：<a href="https://space.bilibili.com/480140591">https://space.bilibili.com/480140591</a></dd>
          </dl>
        </Card>
      </div>
      <Aside
        showUserInfo={false}
      />
    </>
  );
}

import { Breadcrumb } from "antd";
import {Link} from "react-router-dom"
function useBreadcrumb(now){
    return <Breadcrumb>
    <Breadcrumb.Item>
        <Link to="/">主页</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>{now}</Breadcrumb.Item>
</Breadcrumb>
}

export default useBreadcrumb;
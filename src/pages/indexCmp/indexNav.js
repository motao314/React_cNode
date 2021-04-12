import Nav from "../../components/nav";
import qs from "qs";
function IndexNav({data,categoryId}){
    let nowData = data.map(item=>{
        return {
            to:`/?categoryId=${item.id}`,
            title: item.name
        }
    })
    return data.length>0?<Nav
    data={nowData}
    theme="light"
    getKey={()=>{
      return nowData.findIndex(item=>categoryId===qs.parse(item.to.substr(2)).categoryId);
    }} 
  />:"";
}

export default IndexNav;

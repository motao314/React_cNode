import { Card } from "antd";

export default function ({title,children}) {
  return (
    <Card
      bordered
      title={title}
      className="asideBox"
      type="inner"
    >
      {children}
    </Card>    
  );
}

import { Card } from "antd";
import Aside from "../components/aside";
import useAvatar from "../hooks/avatar";

export default function() {
    const avatar = useAvatar();
    
    return (
        <>
          <div className="pageMain">
              <Card className="contentBox">
                  {avatar()}          
              </Card>
          </div>
          <Aside />
        </>
    );
  }
  
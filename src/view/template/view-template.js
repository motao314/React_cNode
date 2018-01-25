import React,{Component} from "react";
import {Card} from "antd";
export default class ViewTemplate extends Component{
    render(){
        const data = this.props.data;
        return (<div>
            {data.map(item =>{
                return (
                    <Card
                        key={item.title}
                        title={item.title}
                        type="inner"
                        className = {item.className}
                    >
                        <div dangerouslySetInnerHTML={
                            {
                                __html:item.content
                            }
                        }></div>
                    </Card>
                );
            })}
        </div>);
    }
}
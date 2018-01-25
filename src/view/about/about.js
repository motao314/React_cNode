import React,{Component} from "react";
import data from "./data";
import ViewTemplate from "../template/view-template";
export default class About extends Component{
    render(){
        return (
            <ViewTemplate
                data = {data}
            />
        );
    }
}
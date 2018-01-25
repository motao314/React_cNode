import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import IndexList from "../view/index/list";
export default class RouterList extends Component {
    render(){
        return (
            <Switch>
                <Route path="/index" exact render={()=>(<Redirect to="/index/all" />)}/>
                <Route path="/index/all" component={IndexList}/>
                <Route path="/index/ask" component={IndexList}/>
                <Route path="/index/share" component={IndexList}/>
                <Route path="/index/job" component={IndexList}/>
                <Route path="/index/dev" component={IndexList}/>
                <Route path="/index/good" component={IndexList}/>
            </Switch>
        );
    }
}
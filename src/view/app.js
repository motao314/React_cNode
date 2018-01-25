import React,{Component} from "react";
import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import RounterIndex from "../router/router";
export default class App extends Component {
    render(){
        return (
           <div className="wrap">
               <MainHeader />
               <main className="main">
                    <RounterIndex />
               </main>
                <MainFooter/>
           </div>
        );
    }
}
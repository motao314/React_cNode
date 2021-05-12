import Turndown from "turndown";
const TurndownService = new Turndown();

export default (input)=>{
    return TurndownService.turndown(input);
}
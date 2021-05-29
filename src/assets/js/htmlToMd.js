import Turndown from "turndown";
const TurndownService = new Turndown({
    "codeBlockStyle":"fenced"
});
TurndownService.addRule('code', {
    filter: ['code',"pre"],
    replacement: function (content) {
      return '```\n' + content + '```\n'
    }
  })
export default (input)=>{
    return TurndownService.turndown(input);
}
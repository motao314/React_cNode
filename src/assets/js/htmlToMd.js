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
console.log(TurndownService.turndown(`<code>123</code>`));
export default (input)=>{
    return TurndownService.turndown(input);
}
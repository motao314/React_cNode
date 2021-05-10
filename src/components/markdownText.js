import ReactMarkdown from "react-markdown";
import markdownStyle from "../assets/less/markdown.less";
function MarkdownText({children}){
    return <div className={markdownStyle.markdownText}>
            <ReactMarkdown>{children}</ReactMarkdown>
    </div>;
}

export default MarkdownText;
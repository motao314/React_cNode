import { useState } from 'react';
import ReactQuill,{Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import quillEmoji from 'quill-emoji';
import "quill-emoji/dist/quill-emoji.css";
import { Button } from 'antd';
const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;
Quill.register({
    'formats/emoji': EmojiBlot,
    'modules/emoji-shortname': ShortNameEmoji,
    'modules/emoji-toolbar': ToolbarEmoji,
    'modules/emoji-textarea': TextAreaEmoji
  }, true);
const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  
        ['blockquote', 'code-block'],
        ['bold', 'italic', 'underline', 'strike'],  
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link','image'], // a链接和图片的显示
        [{ 'align': [] }],
        [{
          'background': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
            'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
            'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
            'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
            'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
            'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
            'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
            'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
            'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
            'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
            'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
            'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
        }],
        [{
          'color': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
            'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
            'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
            'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
            'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
            'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
            'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
            'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
            'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
            'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
            'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
            'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
        }],
        ['emoji'], //emoji表情，设置了才能显示
        ['clean']
      ],
    },
    'emoji-toolbar': true,  //是否展示出来
    "emoji-textarea": false, //我不需要emoji展示在文本框所以设置为false
    "emoji-shortname": true, 
  }  
function MdEditor({className="",fnSubmit=()=>{},children,user}){
    const [value, setValue] = useState('');
    const [submiting,setSubmiting] = useState(false);
    const [disabled,setDisabled] = useState(false);
    return <div className="editBox">
        <ReactQuill 
          theme="snow" 
          value={value} 
          modules={modules} 
          onChange={val=>{
            setValue(val);
            setDisabled(!val.length);
          }} 
          className={className}
          readOnly={submiting}
        />
        {children}
        <div className="clearFix">
            <Button 
                type={"primary"} 
                className="editorBtn"
                disabled={disabled}
                loading={submiting}
                onClick={async()=>{
                    if(submiting){
                      return;
                    }
                    setSubmiting(true);
                    setDisabled(true);
                    await fnSubmit(value,setValue);
                    setDisabled(false);
                    setSubmiting(false);
                }}
            >提交</Button>
        </div>
    </div>
}
export default MdEditor;
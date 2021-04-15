function useFormLayout() {
    return {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 }
    }
}
function useFormLayoutBtn() {
    return {
        wrapperCol: { offset: 6, span: 12 }
    }
}
export { useFormLayout, useFormLayoutBtn };
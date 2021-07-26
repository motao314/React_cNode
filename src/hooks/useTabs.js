import { useDispatch, useSelector } from "dva";
import { useEffect } from "react";

function useTabs() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!categories.length) {
            dispatch({
                type: "categories/getData"
            });
        }
    }, [])
    return categories;
}

export default useTabs;
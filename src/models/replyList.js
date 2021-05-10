import api from "../assets/js/api";
export default {
    namespace: "replyList",
    state: {
        replyList: [],
        limit: 5,
        page: 1,
        pages: 0
    },
    reducers: {
        upload(state, { replyList, limit, pages, page }) {
            if (page > 1) {
                return {
                    limit,
                    pages,
                    page,
                    replyList: state.replyList.concat(replyList)
                };
            }
            return {
                limit,
                pages,
                page,
                replyList
            }

        }
    },
    effects: {
        *getData({ articleId, page, limit = 5 }, { call, put }) {
            const res = yield call(api.replyList, { page, limit, articleId });
            const { replies, pages } = res.data.results;
            yield put({
                type: "upload",
                replyList:replies,
                limit,
                pages,
                page
            })
        }
    }
}

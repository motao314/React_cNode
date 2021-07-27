import api from "../assets/js/api";
export default {
    namespace: "userReplys",
    state: {
        articles: [],
        count: 0,
        limit: 5,
        page: 0,
        pages: 0,
    },
    reducers: {
        upload(state, payload) {
            if (payload.data.page > 1) {
                return {
                    ...payload.data,
                    articles: [...state.articles, ...payload.data.articles]
                }
            }
            return payload.data;
        },
        reset() {
            return {
                articles: [],
                count: 0,
                limit: 5,
                page: 0,
                pages: 0
            }
        }
    },
    effects: {
        *getData({ userId, page, limit }, { call, put }) {
            let data;
            const res = yield call(api.userReplies, { userId, page, limit });
            data = res.data.results;
            yield put({
                type: "upload",
                data
            })
        }
    }
}

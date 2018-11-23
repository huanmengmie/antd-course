import request from '../util/request';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};


export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0,
    },
    // 异步获取数据，然后调用reducers中的方法
    effects: {
        /**
         *
         * @param _ 传递过来的action对象，可以获取payload字段
         * @param cal
         * @returns {IterableIterator<*>}
         */
        *queryInitCards(_, {call, put}) {
            const proxyURI = '/dev/random_joke';
            const puzzle = yield call(request, proxyURI);
            // yield put 派发的 action 如果是为了触发同 model 中的其他 effect/reducer 执行，不需要指定 namespace 名称。
            yield put({type:'addNewCard', payload: puzzle});
            yield call(delay, 1000);

            const originUrl = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
            const puzzle2 = yield call(request, originUrl);
            yield put({type:'addNewCard', payload: puzzle2});

            yield call(delay, 1000);
            const mockUrl = '/local/local_joke'
            const puzzle3 = yield call(request, mockUrl);
            yield put({type:'addNewCard', payload: puzzle3});
        }
    },
    // reducers 同步修改state的方法
    reducers: {
        /**
         *  添加新的卡片
         * @param state  老状态
         * @param newCard 传入的参数
         * {payload: newCard}  获取传递过来的action的payload
         * @returns 返回并修改的state值
         */
        addNewCard(state, {payload: newCard}) {
            const nextCounter = state.counter + 1;
            const newCardWithId = {...newCard, id: nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },

};
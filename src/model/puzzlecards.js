export default {
    namespace: 'puzzlecards',
    state: {
        data: [
            {
                id: 1,
                setup: 'Did you hear about the two silk worms in a race?',
                punchline: 'It ended in a tie',
            },
            {
                id: 2,
                setup: 'What happens to a frog\'s car when it breaks down?',
                punchline: 'It gets toad away',
            },
        ],
        counter: 100,
    },
    // reducers 同步修改state的方法
    reducers:{
        /**
         *  添加新的卡片
         * @param state  老状态
         * @param newCard 传入的参数
         * {payload: newCard}  获取传递过来的action的payload
         * @returns 返回并修改的state值
         */
        addNewCard(state, {payload: newCard}){
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data:nextData,
                counter:nextCounter,
            };
        }
    }

};
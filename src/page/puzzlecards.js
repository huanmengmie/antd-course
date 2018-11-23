import React, {Component} from 'react';
import {Card, Button} from 'antd';
import {connect} from 'dva';

const namespace = 'puzzlecards';
const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList,
    }
}

// 异步加载，先触发effects
const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount:()=>{
            dispatch({type:`${namespace}/queryInitCards`});
        }
    }
}

// 同步加载，直接触发reducers
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClickAdd: (newCard) => {
//             const action = {
//                 type: `${namespace}/addNewCard`,
//                 payload: newCard,
//             }
//             dispatch(action);
//         }
//     }
// }

// mapStateToProps会自动传入所有的state
@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.counter = 100;
    //     this.state = {
    //         cardList: [
    //             {
    //                 id: 1,
    //                 setup: 'Did you hear about the two silk worms in a race?',
    //                 punchline: 'It ended in a tie',
    //             },
    //             {
    //                 id: 2,
    //                 setup: 'What happens to a frog\'s car when it breaks down?',
    //                 punchline: 'It gets toad away',
    //             },
    //         ],
    //     }
    // }

    // 生命周期函数，组件被渲染完后
    componentDidMount() {
        this.props.onDidMount();
    }

    addNewCard() {
        const state = this.state.cardList;
        this.counter += 1;
        const card = {
            id: this.counter,
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        };
        this.setState({cardList: [...state, card]});
    }

    addCard = () => {
        this.setState(prevState => {
            const prevCardList = prevState.cardList;
            this.counter += 1;
            const card = {
                id: this.counter,
                setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            };
            return {
                cardList: prevCardList.concat(card),
            };
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        )
                    })
                }
                {/*<div>*/}
                {/*<Button onClick={()=>this.addNewCard()}> 添加卡片 </Button>*/}
                {/*<Button onClick={this.addCard}> 添加卡片 </Button>*/}
                {/*</div>*/}

            </div>
        )
    }
}
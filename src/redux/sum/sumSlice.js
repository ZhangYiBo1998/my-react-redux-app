import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sumSlice = createSlice({
    // 区分其他slice的标识
    name: 'sum',
    // 初始化数据
    initialState: {
        value: 1
    },
    reducers: {
        /**
         * state.value 存储在redux中的数据
         * action {type:'action的type值：sum/increment',payload:"组件传入的数据"}
         */
        increment: (state, action) => {
            state.value += action.payload
        },
        decrement: (state, { payload }) => {
            state.value -= payload;
        },
        incrementByAmount: (state, { payload }) => {
            state.value += payload
        },
        incrementIfOdd: (state, { payload }) => {
            if (state.value % 2 === 1) {
                state.value += payload
            }
        },
    },
    // // “extraReducers”字段允许切片处理其他地方定义的操作，包括createAsyncThunk或其他切片中生成的操作。
    // extraReducers: (builder) => {
    //     builder.addCase(incrementAsync.pending, (state) => {
    //         console.log('extraReducers loading');
    //         //   state.status = 'loading';
    //     }).addCase(incrementAsync.fulfilled, (state, action) => {
    //         console.log('extraReducers idle');
    //         //   state.status = 'idle';
    //         state.value += action.payload;
    //     });
    // },
})

// #region
// 创建异步action
export const incrementAsync = createAsyncThunk(
    // type
    'sum/incrementAsync',
    // data
    async (value, store) => {
        // value传入的参数
        console.log(value, store);
        const response = await fetchCount(value);
        
        store.dispatch(incrementByAmount(response))
        // return response;
    }
)
// 模拟接口调用
function fetchCount(value = 1) {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(value)
        }, 1000)
    );
}
// #endregion

export default sumSlice.reducer;

export const { increment, decrement, incrementByAmount, incrementIfOdd } = sumSlice.actions

export const selectSum = (state) => {
    return state.sum.value
}
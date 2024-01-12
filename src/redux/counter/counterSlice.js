import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // “reducers”字段允许我们定义reducers并生成相关操作
  reducers: {
    increment: (state) => {
      // Redux Toolkit允许我们在reducers中编写“突变”逻辑。
      // 它实际上不会改变状态，因为它使用了Immer库，该库检测“草稿状态”的更改，并根据这些更改生成一个全新的不可变状态
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // 使用PayloadAction类型声明`action.payload的内容`
    // 传递给incrementByAmount的参数会放在action的payload内
    incrementByAmount: (state, action) => {
      // state.value为修改前的值，action.payload为传入的参数
      state.value += action.payload;
    }
  },
  // “extraReducers”字段允许切片处理其他地方定义的操作，包括createAsyncThunk或其他切片中生成的操作。
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log('extraReducers loading');
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log('extraReducers idle');
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

// 我们也可以手工编写thunk，它可能同时包含同步和异步逻辑。
// 下面是一个基于当前状态有条件地调度操作的示例。
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  // 通过封装的函数获取传入的参数
  // const currentValue = selectCount(getState());
  // 直接获取传入的参数
  const currentValue = getState().counter.value;
  if (currentValue % 2 === 1) {
    dispatch(counterSlice.actions.incrementByAmount(amount));
  }
};

// #region
// 下面的函数被称为thunk，它允许我们执行异步逻辑。
// 它可以像常规操作一样进行调度：“dispatch(incrementAsync(10))”。
// 这将调用以“dispatch”函数作为第一个参数的thunk。
// 然后可以执行异步代码，并可以调度其他操作。
// Thunk通常用于发出异步请求。
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (value) => {
    // value传入的参数
    const response = await fetchCount(value);
    // The value we return becomes the `fulfilled` action payload
    // 当异步请求状态变为fulfilled(成功)时，response才会返回
    return response.data;
  }
);
// 模拟接口调用
function fetchCount(value = 1) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ data: value })
    }, 1000)
  );
}
// #endregion

// 将定义的action暴露出去
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 下面的函数被称为选择器，允许我们从状态中选择一个值。选择器也可以在使用它们的地方内联定义，而不是在切片文件中。
// 例如：`useSelector((state:RootState)=>state.counter.value)`
export const selectCount = (state) => {
  // 返回state下的counter类型的value值
  return state.counter.value;
};


export default counterSlice.reducer;

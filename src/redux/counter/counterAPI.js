// A mock function to mimic making an async request for data
// 模拟对数据进行异步请求的mock函数
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

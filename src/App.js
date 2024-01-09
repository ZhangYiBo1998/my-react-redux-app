// 必须引入antd.css，否则antd组件样式不显示
// import 'antd/dist/antd.css';
import React, { Suspense, useState } from 'react';
// 引入路由模块
import { Navigate, useRoutes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
// 引入路由文件routes.js，是为了能实现页面间无刷新跳转
import { pageRouterArr } from './routes/routes';
// 引入全局文件utils/index.js
import { getCookie } from './utils';


function App() {
  const [state] = useState({
    isLogin: !!getCookie('userInfo'),
  })

  const element = useRoutes([
    ...pageRouterArr,
    {
      path: "/",
      element: <Navigate to={state.isLogin ? '/home/index' : '/login'} />
    }
  ])

  return (
    <div className="App bg-image bg-skyblue">
      <Suspense fallback={<Loading fullScreen size='large' />}>
        {/* 注册路由 */}
        {element}
      </Suspense>
    </div>
  );
}

export default App;


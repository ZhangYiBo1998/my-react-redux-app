// 必须引入antd.css，否则antd组件样式不显示
// import 'antd/dist/antd.css';
import React, { Suspense, useState } from 'react';
// 引入路由模块
import { Navigate, Route, Routes } from 'react-router-dom';
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

  return (
    <div className="App bg-image bg-skyblue">
      <Suspense fallback={<Loading fullScreen size='large' />}>
        {/* 注册路由 */}
        <Routes>
          {/* Routes可以让注册的路由只匹配一次 */}
          {/* exact属性开启严格匹配，但尽量不用 */}
          {
            pageRouterArr.map(pageRouter => {
              const { path, element } = pageRouter;
              return <Route key={path} path={path} element={element} />
            })
          }
          {/* Navigate表示重定向，当都没有匹配上的时候，根据Navigate显示对应组件 */}
          <Route path='/' element={<Navigate to={state.isLogin ? '/home/index' : '/login'} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;


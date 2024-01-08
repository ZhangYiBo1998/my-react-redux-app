import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from '../../components/Loading';
import UserHead from '../../components/UserHead';
import { navRouterArr } from '../../routes/routes';
import './index.css';
import Navigation from './Navigation';

export default function Home(props) {
    function secondryRoute(arr) {
        return arr.map((obj) => {
            const hasChilden = obj.secondryMenu && obj.secondryMenu.length;
            const { path, element, secondryMenu } = obj;
            return (
                hasChilden ?
                    secondryRoute(secondryMenu)
                    : <Route key={path} path={path} element={element} />
            )
        })
    }

    return (
        <div className='homePage'>
            <UserHead />
            <div className="page-box">
                <Navigation />
                <div className='page-body'>
                    <Suspense fallback={<Loading fullContainer />}>
                        {/* 注册路由 */}
                        <Routes>
                            {/* Routes可以让注册的路由只匹配一次 */}
                            {/* exact属性开启严格匹配，但尽量不用 */}
                            {secondryRoute(navRouterArr)}
                            {/* Navigate表示重定向，当都没有匹配上的时候，根据Navigate显示对应组件 */}
                            <Route path='/' element={<Navigate to={navRouterArr[0].path} />} />
                        </Routes>
                    </Suspense>
                </div>

            </div>
        </div>
    )
}

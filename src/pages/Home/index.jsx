import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../../components/Loading';
import UserHead from '../../components/UserHead';
import './index.css';
import Navigation from './Navigation';

export default function Home(props) {

    return (
        <div className='homePage'>
            <UserHead />
            <div className="page-box">
                <Navigation />
                <div className='page-body'>
                    {/* 指定路由组件呈现的位置 */}
                    <Suspense fallback={<Loading fullContainer />}>
                        <Outlet />
                    </Suspense>
                </div>

            </div>
        </div>
    )
}

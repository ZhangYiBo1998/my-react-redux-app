import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLogo from '../../../components/ReactLogo';
import './index.css';

import { navRouterArr } from '../../../routes/routes';


export default function NavigationComponent() {
    const [menuArr] = useState(setNavItems(navRouterArr));

    const pathArr = (window.location.pathname || '/home/index').split('/');
    const pathName = pathArr[pathArr.length - 1];
    const [selectKey] = useState(pathName);
    const navigate = useNavigate();

    function setNavItems(arr) {
        return arr.map(item => {
            return {
                key: item.key,
                icon: item.icon || <MailOutlined />,
                label: item.name,
                children: item.children && setNavItems(item.children),
                type: item.type,
            }
        })
    }

    function clickMenu(e) {
        // 跳转路由
        // antd组件暂不支持前进后退后自动选中菜单子项操作
        navigate(e.key);
    };

    return (
        <div className='Navigation'>
            <div className='head'>
                <ReactLogo animation />
            </div>
            <Menu
                onClick={clickMenu}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={[selectKey]}
                defaultOpenKeys={['game']}
                mode="inline"
                items={menuArr}
            />
        </div>
    )
}
import { EditOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';
import { lazy } from "react";

import HomePage from "../pages/Home";
import Initialization from "../pages/Home/Initialization";
import LoginPage from "../pages/Login";

const UserCenter = lazy(() => import("../pages/UserCenter"));
const SettingCenter = lazy(() => import("../pages/SettingCenter"));

const ReduxDemo = lazy(() => import("../pages/Home/ReduxDemo"));
const ReduxTest = lazy(() => import("../pages/Home/ReduxTest"));
const SVGStudy = lazy(() => import("../pages/Home/SVGStudy"));
const WXModuleTool = lazy(() => import("../pages/Home/WXModuleTool"));
const About = lazy(() => import("../pages/Home/About"));
const Gobang = lazy(() => import("../pages/Home/Game/Gobang"));
const Tank = lazy(() => import("../pages/Home/Game/Tank"));

//定义导航路由,最多不要超过3级，否则样式会出错
//name:路由名字
//icon:路由图标
//path:路由路径
//element:路由跳转的组件
//childen:次级路由
export const navRouterArr = [
  {
    name: "首页",
    icon: <HomeOutlined />,
    path: "index",
    key: "index",
    element: <Initialization />,
  },
  {
    name: "官方Redux案例",
    icon: <HomeOutlined />,
    path: "ReduxDemo",
    key: "ReduxDemo",
    element: <ReduxDemo />,
  },
  {
    name: "我的Redux案例",
    icon: <HomeOutlined />,
    path: "ReduxTest",
    key: "ReduxTest",
    element: <ReduxTest />,
  },
  {
    name: "游戏",
    icon: "",
    key: "game",
    children: [
      {
        name: "五子棋",
        icon: "",
        path: "gobang",
        key: "gobang",
        element: <Gobang />,
      },
      {
        name: "坦克大战",
        icon: "",
        path: "tank",
        key: "tank",
        element: <Tank />,
      },
    ],
  },
  {
    name: "SVG练习",
    icon: <EditOutlined />,
    path: "SVGStudy",
    key: "SVGStudy",
    element: <SVGStudy />,
  },
  {
    name: "微信链接工具",
    icon: <EditOutlined />,
    path: "WXModuleTool",
    key: "WXModuleTool",
    element: <WXModuleTool />,
  },
  {
    name: "关于我",
    icon: <SmileOutlined />,
    path: "about",
    key: "about",
    element: <About />,
  },
];

//创建路由,暂时无用
export const createNavRouter = (params) => {
  const obj = {
    name: "",
    icon: "",
    path: "/",
    element: null,
  };
  navRouterArr.push({
    ...obj,
    ...params,
  });
};

export const pageRouterArr = [
  {
    name: "首页",
    path: "/home/*",
    element: <HomePage />,
    children: navRouterArr,
  },
  {
    name: "登录页",
    path: "/login",
    element: <LoginPage />,
  },
  {
    name: "个人中心",
    path: "/userCenter",
    element: <UserCenter />,
  },
  {
    name: "设置中心",
    path: "/settingCenter",
    element: <SettingCenter />,
  },
];

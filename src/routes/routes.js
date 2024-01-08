import { EditOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';
import { lazy } from "react";
import HomePage from "../pages/Home";
import Initialization from "../pages/Home/Initialization";
import LoginPage from "../pages/Login";

const UserCenter = lazy(() => import("../pages/UserCenter"));
const SettingCenter = lazy(() => import("../pages/SettingCenter"));

const ReduxDemo = lazy(() => import("../pages/Home/ReduxDemo"));
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
//showChilden:是否默认加载次级路由，设置为true时加载
export const navRouterArr = [
  {
    name: "首页",
    icon: <HomeOutlined />,
    path: "index",
    key:"/home/index",
    element: <Initialization />,
  },
  {
    name: "Redux案例",
    icon: <HomeOutlined />,
    path: "ReduxDemo",
    key:"/home/ReduxDemo",
    element: <ReduxDemo />,
  },
  {
    name: "游戏",
    icon: "",
    path: "game",
    key:"/home/game",
    secondryMenu: [
      {
        name: "五子棋",
        icon: "",
        path: "game/gobang",
        key:"/home/game/gobang",
        element: <Gobang />,
      },
      {
        name: "坦克大战",
        icon: "",
        path: "game/tank",
        key:"/home/game/tank",
        element: <Tank />,
      },
    ],
  },
  {
    name: "SVG练习",
    icon: <EditOutlined />,
    path: "SVGStudy",
    key:"/home/SVGStudy",
    element: <SVGStudy />,
  },
  {
    name: "微信链接工具",
    icon: <EditOutlined />,
    path: "WXModuleTool",
    key:"/home/WXModuleTool",
    element: <WXModuleTool />,
  },
  {
    name: "关于我",
    icon: <SmileOutlined />,
    path: "about",
    key:"/home/about",
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
    childen: navRouterArr,
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

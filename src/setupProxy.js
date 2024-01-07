const proxy = require('http-proxy-middleware');
const {
    proxy8090,
    proxy53000
} = require('./utils/proxy_variable.js');

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware(`/${proxy8090}`, { //遇见/proxy8090这个前缀的请求，就会触发该代理配置
            target: `http://localhost:8090`, //请求转发给谁
            changeOrigin: true, //控制服务器收到的请求头中Host字段的值，Host字段表示本次请求从哪里发出的，默认false
            /*
            changeOrigin 为 true 时，服务器收到的请求头中的host为：127.0.0.1:6000，也就是代理地址的 host
            changeOrigin 为 false 时，服务器收到的请求头中的host为：localhost:3000，也就是本地站点地址的 host
            changeOrigin 默认 false，但一般需要将 changeOrigin 值设为 true，根据自己需求调整
            */
            pathRewrite: {
                [`^/${proxy8090}`]: '' //重写请求路径
            }
        }),
        proxy.createProxyMiddleware(`/${proxy53000}`, { //遇见/proxy8090这个前缀的请求，就会触发该代理配置
            target: `http://localhost:53000`, //请求转发给谁
            changeOrigin: true, //控制服务器收到的请求头中Host字段的值，Host字段表示本次请求从哪里发出的，默认false
            /*
            changeOrigin 为 true 时，服务器收到的请求头中的host为：127.0.0.1:6000，也就是代理地址的 host
            changeOrigin 为 false 时，服务器收到的请求头中的host为：localhost:3000，也就是本地站点地址的 host
            changeOrigin 默认 false，但一般需要将 changeOrigin 值设为 true，根据自己需求调整
            */
            pathRewrite: {
                [`^/${proxy53000}`]: '' //重写请求路径
            }
        })
    )
}
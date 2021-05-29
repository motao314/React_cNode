import path from "path";
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/index'
        },
        { path: '/getstart', component: '../pages/getstart' },
        { path: '/about', component: '../pages/about' },
        { path: '/user/:id', component: '../pages/user' },
        { 
          path: '/topic/create', 
          Routes: ["/src/components/auth"],
          component: '../pages/createTopic' 
        },
        { path: '/topic/:id', component: '../pages/topic' },
        {
          path: '/setting',
          Routes: ["/src/components/auth"], 
          component: '../pages/setting'
        },
        { 
          path: '/login',
          Routes: ["/src/components/authLogin"], 
          component: '../pages/login' 
        },
        { 
          path: '/register',
          Routes: ["/src/components/authLogin"], 
          component: '../pages/register' 
        },
        { path: '', component: '../pages/404' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'React_cNode',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/dataapi': {
      target: 'http://localhost:8888',
      changeOrigin: true,
      pathRewrite:{
        '^/dataapi':"/api"
      }
    }
  }
}

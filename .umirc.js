
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/getstart', component: '../pages/getstart' },
        { path: '/api', component: '../pages/api' },
        { path: '/about', component: '../pages/about' },
        { path: '/user/:loginname', component: '../pages/user' },
        { path: '/topic/create', component: '../pages/createTopic' },
        { path: '/topic/:id', component: '../pages/topic' },
        { path: '/setting', component: '../pages/createTopic' },
        { path: '/login', component: '../pages/login' },
        { path: '/register', component: '../pages/register' },
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
}

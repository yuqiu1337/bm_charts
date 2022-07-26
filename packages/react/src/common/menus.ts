const menus = {
  '/guide': [
    {
      title: '简介',
      path:'/guide/home'
    },
    {
      title: '安装',
      path:'/guide/create'
    },
    {
      title: '版本迭代',
      path:'/guide/edition'
    },
    {
      title: '备注',
      path:'/guide/remarks'
    }
  ],
  '/components':[
    {
      title: '基础图表',
      children:[
        // {
        //   title: '数据卡片',
        //   path:'/components/card-chart',
        // },
        // {
        //   title: '饼图',
        //   path:'/components/pie-chart',
        // },
        {
          title: '基础图表',
          path:'/components/plain-chart',
        },
        {
          title: '柱状图',
          path:'/components/bar-chart',
        },
      ]
    }
  ]
}

export default menus;

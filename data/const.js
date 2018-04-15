export const routerConfig = [
    {
        path: 'product',
        name: '审核管理',
        children: [
            {
                path: 'list',
                name: '耗材目录',
                component: dynamicWrapper(
                    app,
                    ['product-catalog'],
                    'product/catalog',
                    () => import('../pages/product/catalog')
                )
            }
        ]
    },
    {
        path: 'repository',
        name: '仓间维护',
        children: [
            {
                path: 'basic',
                name: '库房信息维护',
                component: dynamicWrapper(
                    app,
                    ['repository-basic'],
                    'repository/basic',
                    () => import('../pages/repository/basic')
                )
            },
            {
                path: 'relation',
                name: '请领关系维护',
                component: dynamicWrapper(
                    app,
                    ['repository-relation'],
                    'repository/relation',
                    () => import('../pages/repository/relation')
                )
            },
            {
                path: 'product/add',
                name: '库房物资添加',
                component: dynamicWrapper(
                    app,
                    ['repository-product'],
                    'repository/product',
                    () => import('../pages/repository/product')
                )
            },
            {
                path: 'product/query',
                name: '库房物资查询',
                component: dynamicWrapper(
                    app,
                    ['repository-product'],
                    'repository/product-query',
                    () => import('../pages/repository/product-query')
                )
            },
            {
                path: 'position',
                name: '库位管理',
                component: dynamicWrapper(
                    app,
                    ['repository-position'],
                    'repository/position',
                    () => import('../pages/repository/position/index')
                )
            }
        ]
    },
    {
        path: 'audit',
        name: '审核管理',
        children: [
            {
                path: 'product',
                name: '注册证/耗材审核',
                component: dynamicWrapper(app, ['audit-product'], 'audit/product', () =>
                    import('../pages/audit/product/index')
                )
            }
        ]
    },
    {
        path: 'apply',
        name: '耗材申领管理',
        children: [
            {
                path: 'product',
                name: '耗材请领',
                component: dynamicWrapper(app, ['apply-product'], 'apply/product', () =>
                    import('../pages/apply/product')
                )
            },
            {
                path: 'audit',
                name: '请领审核',
                component: dynamicWrapper(app, ['apply-order'], 'apply/order', () =>
                    import('../pages/apply/order/apply-order-audit')
                )
            },
            {
                path: 'order',
                name: '耗材请领',
                component: dynamicWrapper(app, ['apply-order'], 'apply/order', () =>
                    import('../pages/apply/order/apply-order-list')
                )
            }
        ]
    },
    {
        path: 'supplier',
        name: '供应商管理',
        children: [
            {
                path: 'basic',
                name: '供应商信息',
                component: dynamicWrapper(
                    app,
                    ['supplier-basic'],
                    'supplier/basic',
                    () => import('../pages/supplier/basic')
                )
            }, {
                path: 'register',
                name: '注册证信息',
                component: dynamicWrapper(
                    app,
                    ['supplier-register'],
                    'supplier/register',
                    () => import('../pages/supplier/register')
                )
            }, {
                path: 'commitment',
                name: '承诺书',
                component: dynamicWrapper(
                    app,
                    ['supplier-commitment'],
                    'supplier/commitment',
                    () => import('../pages/supplier/commitment')
                )
            }, {
                path: 'authorization',
                name: '授权书信息',
                component: dynamicWrapper(
                    app,
                    ['supplier-authorization'],
                    'supplier/authorization',
                    () => import('../pages/supplier/authorization')
                )
            }, {
                path: 'manufacturer',
                name: '生产厂家信息',
                component: dynamicWrapper(
                    app,
                    ['supplier-manufacturer'],
                    'supplier/manufacturer',
                    () => import('../pages/supplier/manufacturer')
                )
            },
        ]
    },
];
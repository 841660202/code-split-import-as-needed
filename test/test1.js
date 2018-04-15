const routes = [
    { path: '/sandwiches',
        component: 1
    },
    { path: '/tacos',
        component: 2,
        routes: [
            { path: '/tacos/bus',
                component: 3
            },
            { path: '/tacos/cart',
                component: 4
            }
        ]
    }
]

{routes.map((route, i) => (
   console.log({...route})
))}
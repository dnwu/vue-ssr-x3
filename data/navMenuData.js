const data = [
    {
        name: '入网配置',
        icon: 'icon-border-all',
        children: [
            {
                name: '设备激活',
                path: '/main/deviceActivation'
            },
            {
                name: '网络配置',
                path: '/main/interDeploy'
            },
            
        ]
    },
    {
        name: '设备配置',
        icon: 'icon-cog',
        children: [
            {
                name: '人脸网管管理',
                path: '/main/faceManage'
            },
            {
                name: '摄像头管理',
                path: '/main/cameraManage'
            },
            {
                name: '网络继电器管理',
                path: '/main/relayManage'
            },
        ]
    },
    {
        name: '功能管理',
        icon: 'icon-tuning',
        children: [
            {
                name: '位置信息',
                path: '/main/positionInfo'
            },
            {
                name: '人脸库信息',
                path: '/main/faceInfo'
            },
            {
                name: '通道设置',
                path: '/main/wayInfo'
            },
        ]
    },
    {
        name: '工程操作',
        icon: 'icon-show-sidebar',
        children: [
            {
                name: '工程测试',
                path: '/main/projectTest'
            },
            {
                name: '查看人脸库',
                path: '/main/faceList'
            }
        ]
    },
    {
        name: '系统管理',
        icon: 'icon-computer-desktop',
        children: [
            {
                name: '系统操作',
                path: '/main/system'
            },
            {
                name: '系统日记',
                path: '/main/systemLog'
            },
            {
                name: '存储',
                path: '/main/storage'
            }
        ]
    },
]

export default data
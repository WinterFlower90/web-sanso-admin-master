export default {
    ssr: false,
    head: {
        title: '관리자 프레임',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css2?family=Song+Myung:wght@400&display=swap'
            },

        ]
    },
    loading: false,
    css: [
        '@/assets/resets.css',
        'element-ui/lib/theme-chalk/index.css',
        'animate.css/animate.compat.css',
        'animate.css/animate.css',
        '@/assets/layout.css',
        '@/assets/contents.css',
        '@/assets/common.css',
        '@/assets/override.css',
    ],
    plugins: [
        '@/plugins/element-ui',
        {src: '@/plugins/global-store-constants.js'},
        {src: '@/plugins/axios-authenticated.js'},
        {src: '@/plugins/global-filters.js'},
        {src: '@/plugins/global-the-mask.js'},
        {src: '@/plugins/global-functions.js'},
        {src: '@/plugins/global-components.js'},
    ],
    components: true,
    buildModules: [
        '@nuxt/postcss8'
    ],
    modules: [
        '@nuxtjs/toast',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'cookie-universal-nuxt',
        ['nuxt-vuex-localstorage', {
            localStorage: ['authenticated']
        }],

    ],
    toast: {
        position: 'bottom-center',
        duration: 4000,
        theme: 'bubble'
    },
    axios: {
        proxy: true
    },
    proxy: {
        '/v1': 'http://localhost:8080'
    },
    build: {
        transpile: [/^element-ui/],
    }
}

const state = () => ({
    globalMenu: [
        {
            parentName: 'HOME',
            menuLabel: [
                { id: 'DASH_BOARD', icon: 'el-icon-tickets', currentName: '대시보드', link: '/', isShow: true },
            ]
        },
        {
            parentName: '공지사항',
            menuLabel: [
                { id: 'NOTICE_ADD', icon: 'el-icon-tickets', currentName: '공지사항 작성', link: '/notice/form', isShow: false },
                { id: 'NOTICE_LIST_EDIT', icon: 'el-icon-tickets', currentName: '공지사항 수정', link: '/', isShow: false },
                { id: 'NOTICE_ENABLE_FALSE', icon: 'el-icon-tickets', currentName: '공지사항 게시해제', link: '/', isShow: false },
                { id: 'NOTICE_LIST', icon: 'el-icon-tickets', currentName: '공지사항 리스트', link: '/notice/list-page', isShow: true },
                { id: 'NOTICE_DETAIL', icon: 'el-icon-tickets', currentName: '공지 상세정보', link: '/', isShow: false },

            ]
        },
        {
            parentName: '회원관리',
            menuLabel: [
                { id: 'MEMBER_EDIT', icon: 'el-icon-tickets', currentName: '회원수정', link: '/', isShow: false },
                { id: 'MEMBER_LIST', icon: 'el-icon-tickets', currentName: '회원리스트', link: '/customer/list', isShow: true },
                { id: 'MEMBER_DETAIL', icon: 'el-icon-tickets', currentName: '회원상세정보', link: '/', isShow: false },
            ]
        },
        {
            parentName: '마이 메뉴',
            menuLabel: [
                { id: 'MEMBER_LOGOUT', icon: 'el-icon-lock', currentName: '로그아웃', link: '/my-menu/logout', isShow: true },
            ]
        },
    ],
    selectedMenu: 'DASH_BOARD'
})

export default state

import { createRouter, createWebHistory } from 'vue-router';

const otherRoutes = [
	{
		path: '/',
		name: 'Home',
		meta: { authLevel: 0 },
		component: () => import('@/views/signIn/SignInView.vue'),
		// beforeEnter: (to) => {
		//   return isTokenExpire(false, to);
		// },
	},
];

let allRoutes = [];
allRoutes = allRoutes.concat(otherRoutes);

const routes = allRoutes;

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to, from, next) => {
//   const store = useAuthStore();
//   const userInfo = store.userInfo;
//   // 로그인 여부와 관계없이 접근 가능한 메뉴
//   if (to.meta.anonymous) {
//     next();
//     return;
//   }

//   // 로그인 안된 상태
//   if (!userInfo.isLogined) {
//     // 로그인 되어있지 않아야만 접근 가능한 메뉴 (ex. 회원가입, 로그인)
//     if (to.meta.authLevel == 0) {
//       next();
//       return;
//     }

//     createCustomAlert("알림", "로그인이 필요합니다.", "확인");
//     next("/login");
//     return;
//   }

//   // authLevel 0 => 로그인이 되어 있지 않아야만 접근 가능
//   // authLevel 1000 => AI 이미지분류 포탈 일반 사용자
//   // authLevel 2000 => AI 이미지분류 포탈 관리자

//   // 로그인 된 상태
//   const groupCode = userInfo.userGroupCode;

//   switch (to.meta.authLevel) {
//     case 0:
//       // 로그인한 상태에서 회원가입/로그인 화면 등에 URL 직접 입력하여 접근하는 경우
//       createCustomAlert("알림", "잘못된 접근입니다.", "확인");
//       next(from.path);
//       break;
//     case 1:
//       next();
//       break;
//     case 2:
//       if (groupCode >= "1000") {
//         next();
//       } else {
//         createCustomAlert("알림", "페이지 접근 권한이 없습니다.", "확인");
//         console.log("from", from.path);
//         next(from.path); // URL 직접 입력해서 접속하는 경우 빈화면 뜨는 것 방지하기 위해 추가
//       }
//       break;
//     case 3:
//       if (groupCode >= "2000") {
//         next();
//       } else {
//         createCustomAlert("알림", "페이지 접근 권한이 없습니다.", "확인");
//         console.log("from22", from.path);
//         next(from.path);
//       }
//       break;
//   }
// });

export default router;

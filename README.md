# Next.js Routing Test

이 프로젝트는 Next.js의 다양한 라우팅 기능을 테스트하고 학습하기 위해 만들어졌습니다.
`create-next-app`으로 부트스트랩되었으며, App Router를 기반으로 다양한 라우팅 시나리오를 구현합니다.

## 주요 테스트 기능

이 프로젝트를 통해 다음과 같은 Next.js 라우팅 관련 기능들을 살펴볼 수 있습니다:

- **기본 라우팅**:
  - 홈 페이지 (`/`)
  - Layouts & Templates (`/layouts-templates`)
  - Linking & Navigating (`/linking-navigating`)
- **특수 페이지 처리**:
  - Error Handling (`/error-handling` - 에러 및 Not Found 페이지)
  - Loading UI & Streaming (`/loading-streaming`)
- **라우트 제어**:
  - Redirecting (`/redirecting`)
  - Route Groups (`/route-groups`)
  - Dynamic Routes (`/dynamic-routes`)
- **고급 라우팅**:
  - Parallel Routes (`/parallel-routes`)
  - Intercepting Routes (`/intercepting-routes`)
- **API 및 미들웨어**:
  - Route Handlers (`/route-handlers`)
  - Middleware (`/middleware-test`)
- **국제화 (Internationalization)**:
  - i18n 라우팅 및 콘텐츠 제공 (`/internationalization`)

## 시작하기

먼저, 개발 서버를 실행합니다:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`src/app` 디렉토리 내의 각 경로에 해당하는 페이지와 레이아웃 파일을 수정하여 다양한 기능을 테스트해볼 수 있습니다.

## UI 및 스타일링

- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (ThemeProvider, NavigationMenu 등 사용)
- 다크 모드 지원 (ThemeProvider)

## 더 알아보기

Next.js에 대해 더 배우려면 다음 자료들을 참고하세요:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js 기능 및 API에 대해 알아보세요.
- [Learn Next.js](https://nextjs.org/learn) - 인터랙티브 Next.js 튜토리얼입니다.

[Next.js GitHub repository](https://github.com/vercel/next.js)에서 피드백과 기여를 환영합니다!

## Vercel에 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js 제작사인 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 확인하세요.

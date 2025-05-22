import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ko"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;
  const pathnameFirstSegment = pathname.split("/")[1];
  if (locales.includes(pathnameFirstSegment)) {
    return pathnameFirstSegment;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")[0]
      .split("-")[0]
      .toLowerCase();
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- i18n 로직 시작 ---
  const currentPathLocale = pathname.split("/")[1];
  const isPathLocaleSupported = locales.includes(currentPathLocale);

  let resolvedLocale = defaultLocale;
  if (isPathLocaleSupported) {
    resolvedLocale = currentPathLocale;
  } else {
    resolvedLocale = getLocale(request); // 경로에 로케일 없으면 헤더 등에서 감지
  }
  request.nextUrl.searchParams.set("locale", resolvedLocale);

  if (
    !isPathLocaleSupported && // 경로에 지원되는 로케일 프리픽스가 없고
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/_next/") &&
    !pathname.includes(".") &&
  ) {
    const newUrl = new URL(
      `/${resolvedLocale}${pathname === "/" ? "" : pathname}`,
      request.url
    );
    return NextResponse.redirect(newUrl);
  }
  // --- i18n 로직 끝 ---

  // --- 기존 Middleware 로직 (아래에 배치) ---
  const effectivePathname = isPathLocaleSupported
    ? pathname.substring(pathname.indexOf("/", 1))
    : pathname;

  if (effectivePathname.startsWith("/middleware-test")) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(
      "x-custom-header-from-middleware",
      "Hello from Middleware (i18n aware)!"
    );

    let response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    if (effectivePathname === "/middleware-test/redirect-me") {
      const destination = `/${resolvedLocale}/middleware-test/redirected-destination`;
      const newRedirectUrl = new URL(destination, request.url);
      response = NextResponse.redirect(newRedirectUrl);
    }

    return response;
  }

  return NextResponse.next();
}

// Middleware가 실행될 경로를 지정합니다.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};

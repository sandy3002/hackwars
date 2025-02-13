import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const ADMIN_COOKIE="IxRlXa+RNKs/Ly1JUSCAhp5hk3l3AMhK4apkVN6E7gU="
export async function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const admin = request.cookies.get("maalik")
    const response = NextResponse.next()
    if(path.startsWith('/makeMeAnAdminOrElseIWillSueYou')){
        response.cookies.set("maalik", ADMIN_COOKIE);
        return NextResponse.redirect(new URL("/admin", request.url));
    }
    if(admin?.value == ADMIN_COOKIE){
        return null;
    }
    if(path.startsWith("/register") || path.startsWith("/admin")){
        return NextResponse.redirect(new URL("/", request.url));
    }

    return response;
}
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|ico|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
        '/robots.txt'
      ],
}
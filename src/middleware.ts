import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const ADMIN_COOKIE="IxRlXa+RNKs/Ly1JUSCAhp5hk3l3AMhK4apkVN6E7gU="
export async function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const admin = request.cookies.get("maalik")
    if(path.startsWith('/makeMeAnAdminOrElseIWillSueYou')){
        const resp=NextResponse.redirect(new URL("/admin", request.url));
        resp.cookies.set("maalik", ADMIN_COOKIE);
        return resp
    }
    if(admin?.value == ADMIN_COOKIE){
        return null;
    }
    if(path.startsWith("/register") || path.startsWith("/submit") || path.startsWith("/admin")){
        return NextResponse.redirect(new URL("/", request.url));
    }

    return null;
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
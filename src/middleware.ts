import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const admin = request.cookies.get("admin")
    if(admin?.value == "I am god!"){
        return null;
    }
    if(path.startsWith("/register")){
        return NextResponse.redirect(new URL("/", request.url));
    }

    return null
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
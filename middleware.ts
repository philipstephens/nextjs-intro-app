import {NextResponse} from 'next/server';
import {NextRequest} from 'next/server';

export function middleware(request:NextRequest) {
    let response = NextResponse.next();
    response.cookies.set("name","John");
    console.log(response.cookies);
    return NextResponse.next()
}

export const config = {
    matcher: '/learning/:path*',
}

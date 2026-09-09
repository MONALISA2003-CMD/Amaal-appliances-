import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get('url');
  if (!raw) return new NextResponse('Missing image URL', { status: 400 });

  let target: URL;
  try {
    target = new URL(raw);
  } catch {
    return new NextResponse('Invalid image URL', { status: 400 });
  }

  if (target.protocol !== 'https:') {
    return new NextResponse('Only HTTPS image URLs are allowed', { status: 400 });
  }

  try {
    const response = await fetch(target.toString(), {
      headers: { 'User-Agent': 'Amaal-Appliances-Image-Proxy/1.0' },
      redirect: 'follow',
      signal: AbortSignal.timeout(10000),
      cache: 'force-cache',
    });

    if (!response.ok) return new NextResponse('Upstream image unavailable', { status: 502 });

    const contentType = response.headers.get('content-type') || 'image/*';
    if (!contentType.startsWith('image/')) return new NextResponse('Upstream resource is not an image', { status: 415 });

    return new NextResponse(response.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      },
    });
  } catch {
    return new NextResponse('Image proxy failed', { status: 502 });
  }
}

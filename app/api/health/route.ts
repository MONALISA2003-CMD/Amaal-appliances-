import { NextResponse } from 'next/server';
export function GET(){return NextResponse.json({ok:true,service:'amaal-catalogue',catalogueVersion:'commerce-foundation',timestamp:new Date().toISOString()});}

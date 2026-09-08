'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { CSSProperties } from 'react';

type Props = {
  src: string;
  alt: string;
  brand: string;
  model: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  style?: CSSProperties;
};

export function ProductImage({src,alt,brand,model,className='',sizes,priority=false,width=520,height=420,style}:Props){
  const [failed,setFailed]=useState(false);
  if(failed) return <div className={`product-image-fallback ${className}`} role="img" aria-label={`${brand} ${model}`}> <strong>{brand}</strong><span>{model}</span></div>;
  return <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className={className} style={style} onError={()=>setFailed(true)}/>;
}

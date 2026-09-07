'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getBrand } from '@/lib/brand-registry';

type Props = { name: string; size?: 'sm'|'md'|'lg'; className?: string };

export function BrandLogo({ name, size='md', className='' }: Props) {
  const brand = getBrand(name);
  const [failed, setFailed] = useState(false);
  const dimensions = size === 'lg' ? { width: 150, height: 52 } : size === 'sm' ? { width: 88, height: 32 } : { width: 120, height: 42 };
  if (!brand?.logo || failed) return <span className={`brand-logo-fallback ${className}`}>{name}</span>;
  return (
    <span className={`brand-logo ${className}`} title={name}>
      <Image
        src={brand.logo}
        alt={`${name} logo`}
        width={dimensions.width}
        height={dimensions.height}
        unoptimized
        className="brand-logo-image"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

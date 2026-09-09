'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getBrand } from '@/lib/brand-registry';

type Props = { name: string; size?: 'sm'|'md'|'lg'; className?: string };

export function BrandLogo({ name, size='md', className='' }: Props) {
  const brand = getBrand(name);
  const [failed, setFailed] = useState(false);
  const dimensions = size === 'lg' ? { width: 220, height: 96 } : size === 'sm' ? { width: 140, height: 64 } : { width: 180, height: 80 };
  if (!brand?.logo || failed) return null;
  return (
    <span className={`brand-logo ${className}`} title={name} aria-label={`${name} logo`}>
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

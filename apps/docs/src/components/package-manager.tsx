'use client';

import { usePackageManager } from '@/context/package-manager';
import React from 'react'

export default function PackageManager(): JSX.Element {
    const { packageManager} = usePackageManager();

  return (
    <div>
      {packageManager}
    </div>
  )
}
'use client';

import Image from 'next/image';

import LogoImg from '@/assets/logo-color-game.png';
import { usePhotoLoading } from '@/hooks/usePhotoLoading';

export const Logo = () => {
  const { onLoad, loaded, refPhoto } = usePhotoLoading();

  return (
    <Image
      priority
      ref={refPhoto}
      onLoad={onLoad}
      src={LogoImg}
      width={40}
      height={40}
      alt="Color Game logo"
      data-testid="color-game-logo"
      className={`${!loaded ? 'opacity-0' : 'animate-fadeIn opacity-100'}`}
    />
  );
};

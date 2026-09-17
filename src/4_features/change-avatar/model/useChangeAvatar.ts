import React, { type RefObject } from 'react';

export const useChangeAvatar = (fileInputRef: RefObject<HTMLInputElement | null>) => {
  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement | null>) => {
    const file = e.target.files?.[0];
    const maxSize = 2 * 1024 * 1024;

    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (file.size > maxSize) return;

    const fileReader = new FileReader();
    // fileReader.onloadend = () => {
    //   const base64 = fileReader.result as string;
    // };
    fileReader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return { handleChangeAvatar, handleButtonClick };
};

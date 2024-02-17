'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('ee3f2f8f-eccd-4b9e-9706-eff28be5b030');
  }, []);

  return null;
};

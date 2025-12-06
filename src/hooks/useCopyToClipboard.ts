import { useState } from 'react';

export const useCopyToClipboard = (): [boolean, (value: string) => Promise<boolean>] => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (value: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (error) {
      setIsCopied(false);
      return false;
    }
  };

  return [isCopied, copy];
};

export default useCopyToClipboard;
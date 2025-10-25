import { useState } from 'react';

export const useCopyToClipboard = (): [boolean, (text: string) => Promise<boolean>] => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (error) {
      console.error('Failed to copy text:', error);
      setIsCopied(false);
      return false;
    }
  };

  return [isCopied, copy];
};

export default useCopyToClipboard;
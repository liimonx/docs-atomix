import { FC } from 'react';
import { Textarea } from '@shohojdhara/atomix';

interface ShadowInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ShadowInput: FC<ShadowInputProps> = ({ value, onChange }) => {
  return (
      <Textarea
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
        rows={3}
        size="sm"
        placeholder="0 2px 4px rgba(0, 0, 0, 0.1)"
      />
  );
};


import { FC } from 'react';
import { Input } from '@shohojdhara/atomix';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: FC<TextInputProps> = ({ value, onChange }) => {
  return (
      <Input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        size="sm"
      />
  );
};


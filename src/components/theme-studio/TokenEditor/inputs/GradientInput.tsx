import { FC } from 'react';
import { Textarea } from '@shohojdhara/atomix';

interface GradientInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const GradientInput: FC<GradientInputProps> = ({ value, onChange }) => {
  return (
      <Textarea
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
        placeholder="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        size="sm"
        rows={3}
      />
  );
};

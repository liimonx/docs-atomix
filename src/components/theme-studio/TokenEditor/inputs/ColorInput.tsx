import { FC, useState } from 'react';
import { Button, Input } from '@shohojdhara/atomix';
import { HexColorPicker } from 'react-colorful';
import { parseColor, rgbToHex } from '@/utils/colorUtils';
import styles from './ColorInput.module.scss';

interface ColorInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ColorInput: FC<ColorInputProps> = ({ value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  const parsedColor = parseColor(value);
  const hexValue = parsedColor
    ? rgbToHex(parsedColor.r, parsedColor.g, parsedColor.b, parsedColor.a)
    : value;

  const handleColorChange = (newColor: string) => {
    setLocalValue(newColor);
    onChange(newColor);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={styles.colorInput}>
      <div className={styles.colorInput__row}>
        <Button
          variant="secondary"
          className={styles.colorInput__swatch}
          style={{ backgroundColor: hexValue }}
          onClick={() => setShowPicker(!showPicker)}
          aria-label="Open color picker"
        />
        <Input
          type="text"
          size="sm"
          value={localValue}
          onChange={handleTextChange}
          placeholder="#000000"
          className={styles.colorInput__text}
        />
      </div>
      
      {showPicker && (
        <div className={styles.colorInput__picker}>
          <HexColorPicker style={{ width: '100%', height: '200px' }} color={hexValue} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};


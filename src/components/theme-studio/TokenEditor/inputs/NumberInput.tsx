import { FC } from "react";
import { Input } from "@shohojdhara/atomix";
import { Select } from "@shohojdhara/atomix";

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NumberInput: FC<NumberInputProps> = ({ value, onChange }) => {
  const numberMatch = value.match(/^(-?\d+(?:\.\d+)?)(rem|px|em|%|s|ms)?$/);
  const numValue = numberMatch ? numberMatch[1] : "";
  const unit = numberMatch ? numberMatch[2] || "rem" : "rem";

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNum = e.target.value;
    onChange(`${newNum}${unit}`);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnit = e.target.value;
    onChange(`${numValue}${newUnit}`);
  };

  return (
    <div className="u-d-flex u-gap-2 u-relative u-z-1">
      <Input
        type="number"
        value={numValue}
        onChange={handleNumberChange}
        step="0.1"
        className="u-flex-1"
        size="sm"
      />
      <Select
        options={[
          { value: "rem", label: "rem" },
          { value: "px", label: "px" },
          { value: "em", label: "em" },
          { value: "%", label: "%" },
          { value: "s", label: "s" },
          { value: "ms", label: "ms" },
        ]}
        value={unit}
        onChange={handleUnitChange}
        size="sm"
      />
    </div>
  );
};

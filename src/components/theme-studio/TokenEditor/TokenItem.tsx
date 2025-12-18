import { FC, useMemo } from "react";
import { Badge, Icon, Card, Button, Callout, Checkbox } from "@shohojdhara/atomix";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import { detectTokenType, validateTokenValue } from "@/utils/themeTokenUtils";
import { ColorInput } from "./inputs/ColorInput";
import { NumberInput } from "./inputs/NumberInput";
import { ShadowInput } from "./inputs/ShadowInput";
import { GradientInput } from "./inputs/GradientInput";
import { TextInput } from "./inputs/TextInput";
import styles from "./TokenItem.module.scss";

interface TokenMetadata {
  name: string;
  displayName: string;
  type: string;
  category: string;
}

interface TokenItemProps {
  token: TokenMetadata;
  value: string;
}

export const TokenItem: FC<TokenItemProps> = ({ token, value }) => {
  const {
    updateToken,
    toggleFavorite,
    favoriteTokens,
    bulkEditMode,
    selectedTokens,
    toggleTokenSelection,
  } = useThemeStudioStore();
  const isFavorite = favoriteTokens.has(token.name);
  const isSelected = selectedTokens.has(token.name);
  const tokenType = detectTokenType(value);

  // Validate token value
  const validation = useMemo(() => {
    return validateTokenValue(token.name, value, tokenType);
  }, [token.name, value, tokenType]);

  const handleValueChange = (newValue: string) => {
    updateToken(token.name, newValue, `Updated ${token.displayName}`);
  };

  const renderInput = () => {
    switch (tokenType) {
      case "color":
        return <ColorInput value={value} onChange={handleValueChange} />;
      case "number":
        return <NumberInput value={value} onChange={handleValueChange} />;
      case "shadow":
        return <ShadowInput value={value} onChange={handleValueChange} />;
      case "gradient":
        return <GradientInput value={value} onChange={handleValueChange} />;
      default:
        return <TextInput value={value} onChange={handleValueChange} />;
    }
  };

  return (
    <Card
      appearance="filled"
      hoverable
      hoverElevation="lg"
      selected={isFavorite || isSelected}
      className={isSelected ? styles.tokenItem__selected : ''}
    >
      <div className={styles.tokenItem__header}>
        <div className={styles.tokenItem__titleRow}>
          {bulkEditMode && (
            <Checkbox
              checked={isSelected}
              onChange={() => toggleTokenSelection(token.name)}
              aria-label={`Select ${token.displayName} for bulk edit`}
              className={styles.tokenItem__checkbox}
            />
          )}
          <label
            className={styles.tokenItem__label}
            htmlFor={`token-${token.name}`}
          >
            {token.displayName}
          </label>
          <Badge size="sm" label={token.type} />
          <Button
            iconOnly={true}
            variant="ghost"
            size="sm"
            icon={
              <Icon
                name="Star"
                size="sm"
                weight={isFavorite ? "fill" : "regular"}
              />
            }
            onClick={() => toggleFavorite(token.name)}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            aria-pressed={isFavorite}
          />
        </div>
        <div className={styles.tokenItem__name}>{token.name}</div>
      </div>

      <div className={styles.tokenItem__input} id={`token-${token.name}`}>
        {renderInput()}
      </div>

      {/* Validation messages */}
      {validation.errors.length > 0 && (
        <div className={styles.tokenItem__validation} role="alert">
          {validation.errors.map((error, index) => (
            <Callout
              key={index}
              variant="error"
              title="Validation Error"
              className={styles.tokenItem__error}
            >
              {error}
            </Callout>
          ))}
        </div>
      )}

      {validation.warnings.length > 0 && (
        <div className={styles.tokenItem__validation} role="status">
          {validation.warnings.map((warning, index) => (
            <Callout
              key={index}
              variant="warning"
              title="Warning"
              className={styles.tokenItem__warning}
            >
              {warning}
            </Callout>
          ))}
        </div>
      )}
    </Card>
  );
};

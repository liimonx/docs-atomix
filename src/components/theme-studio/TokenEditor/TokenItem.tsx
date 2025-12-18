import { FC } from "react";
import { Badge, Icon, Card, Button } from "@shohojdhara/atomix";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import { detectTokenType } from "@/utils/themeTokenUtils";
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
  const { updateToken, toggleFavorite, favoriteTokens } = useThemeStudioStore();
  const isFavorite = favoriteTokens.has(token.name);
  const tokenType = detectTokenType(value);

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
    <Card  appearance="filled" hoverable hoverElevation="lg" selected={isFavorite}>
      <div className={styles.tokenItem__header}>
        <div className={styles.tokenItem__titleRow}>
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
    </Card>
  );
};

import { FC, useMemo } from 'react';
import { SideMenu as AtomixSideMenu } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import themeTokensData from '@/data/themeTokens.json';

interface CategoryNavProps {}

export const CategoryNav: FC<CategoryNavProps> = () => {
  const { selectedCategory, setSelectedCategory } = useThemeStudioStore();
  const tokensData = themeTokensData as {
    metadata: {
      categories: Array<{ id: string; title: string; description: string }>;
    };
  };

  const categories = tokensData.metadata.categories;

  const menuItems = useMemo(() => {
    const allCategoriesItem = {
      title: 'All Categories',
      onClick: () => setSelectedCategory(null),
      active: selectedCategory === null,
    };

    const categoryItems = categories.map((category) => ({
      title: category.title,
      onClick: () => setSelectedCategory(category.id),
      active: selectedCategory === category.id,
      description: category.description,
    }));

    return [
      {
        title: '',
        items: [allCategoriesItem, ...categoryItems],
      },
    ];
  }, [categories, selectedCategory, setSelectedCategory]);

  return (
    <AtomixSideMenu
      menuItems={menuItems}
    >
      {null}
    </AtomixSideMenu>
  );
};


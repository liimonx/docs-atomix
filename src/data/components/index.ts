// Component metadata index
import { buttonMetadata } from './button';
import { badgeMetadata } from './badge';
import { cardMetadata } from './card';
import { accordionMetadata } from './accordion';
import { atomixGlassMetadata } from './atomix-glass';
import { inputMetadata } from './input';
import { formMetadata } from './form';
import { avatarMetadata } from './avatar';
import { breadcrumbMetadata } from './breadcrumb';
import { dropdownMetadata } from './dropdown';
import { modalMetadata } from './modal';
import { tabMetadata } from './tab';
import { tooltipMetadata } from './tooltip';
import { selectMetadata } from './select';
import { textareaMetadata } from './textarea';
import { spinnerMetadata } from './spinner';
import { iconMetadata } from './icon';
import { progressMetadata } from './progress';
import { toggleMetadata } from './toggle';
import { popoverMetadata } from './popover';
import { ratingMetadata } from './rating';
import { paginationMetadata } from './pagination';
import { stepsMetadata } from './steps';
import { sliderMetadata } from './slider';
import { listMetadata } from './list';
import { calloutMetadata } from './callout';
import { heroMetadata } from './hero';
import { messagesMetadata } from './messages';
import { uploadMetadata } from './upload';
import { countdownMetadata } from './countdown';
import { blockMetadata } from './block';
import { navbarMetadata } from './navbar';

export {
  buttonMetadata,
  badgeMetadata,
  cardMetadata,
  accordionMetadata,
  atomixGlassMetadata,
  inputMetadata,
  formMetadata,
  avatarMetadata,
  breadcrumbMetadata,
  dropdownMetadata,
  modalMetadata,
  tabMetadata,
  tooltipMetadata,
  selectMetadata,
  textareaMetadata,
  spinnerMetadata,
  iconMetadata,
  progressMetadata,
  toggleMetadata,
  popoverMetadata,
  ratingMetadata,
  paginationMetadata,
  stepsMetadata,
  sliderMetadata,
  listMetadata,
  calloutMetadata,
  heroMetadata,
  messagesMetadata,
  uploadMetadata,
  countdownMetadata,
  blockMetadata,
  navbarMetadata
};

export const componentMetadata = [
  buttonMetadata,
  badgeMetadata,
  cardMetadata,
  accordionMetadata,
  atomixGlassMetadata,
  inputMetadata,
  formMetadata,
  avatarMetadata,
  breadcrumbMetadata,
  dropdownMetadata,
  modalMetadata,
  tabMetadata,
  tooltipMetadata,
  selectMetadata,
  textareaMetadata,
  spinnerMetadata,
  iconMetadata,
  progressMetadata,
  toggleMetadata,
  popoverMetadata,
  ratingMetadata,
  paginationMetadata,
  stepsMetadata,
  sliderMetadata,
  listMetadata,
  calloutMetadata,
  heroMetadata,
  messagesMetadata,
  uploadMetadata,
  countdownMetadata,
  blockMetadata,
  navbarMetadata,
];

export const getComponentById = (id: string) => {
  return componentMetadata.find((component) => component.id === id);
};

export const getComponentsByCategory = (category: string) => {
  return componentMetadata.filter((component) => component.category === category);
};

export const getAllCategories = () => {
  const categories = new Set(componentMetadata.map((component) => component.category));
  return Array.from(categories);
};
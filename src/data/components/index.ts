// Component metadata index
export { accordionMetadata } from './Accordion';
export { atomixGlassMetadata } from './AtomixGlass';
export { avatarMetadata } from './Avatar';
export { badgeMetadata } from './Badge';
export { blockMetadata } from './Block';
export { breadcrumbMetadata } from './Breadcrumb';
export { buttonMetadata } from './Button';
export { buttonGroupMetadata } from './ButtonGroup';
export { calloutMetadata } from './Callout';
export { cardMetadata } from './Card';
export { checkboxMetadata } from './Checkbox';
export { containerMetadata } from './Container';
export { countdownMetadata } from './Countdown';
export { dataTableMetadata } from './DataTable';
export { datePickerMetadata } from './DatePicker';
export { dropdownMetadata } from './Dropdown';
export { edgePanelMetadata } from './EdgePanel';
export { formMetadata } from './Form';
export { gridMetadata } from './Grid';
export { gridColMetadata } from './GridCol';
export { heroMetadata } from './Hero';
export { iconMetadata } from './Icon';
export { inputMetadata } from './Input';
export { listMetadata } from './List';
export { masonryGridMetadata } from './MasonryGrid';
export { masonryGridItemMetadata } from './MasonryGridItem';
export { messagesMetadata } from './Messages';
export { modalMetadata } from './Modal';
export { navMetadata } from './Nav';
export { navDropdownMetadata } from './NavDropdown';
export { navItemMetadata } from './NavItem';
export { navbarMetadata } from './Navbar';
export { paginationMetadata } from './Pagination';
export { popoverMetadata } from './Popover';
export { progressMetadata } from './Progress';
export { radioMetadata } from './Radio';
export { ratingMetadata } from './Rating';
export { riverMetadata } from './River';
export { rowMetadata } from './Row';
export { sectionIntroMetadata } from './SectionIntro';
export { selectMetadata } from './Select';
export { sideMenuMetadata } from './SideMenu';
export { sliderMetadata } from './Slider';
export { spinnerMetadata } from './Spinner';
export { stepsMetadata } from './Steps';
export { tabMetadata } from './Tab';
export { textareaMetadata } from './Textarea';
export { toggleMetadata } from './Toggle';
export { tooltipMetadata } from './Tooltip';
export { uploadMetadata } from './Upload';
export { virtualizedGridMetadata } from './VirtualizedGrid';

// Re-import for componentMetadata array
import { accordionMetadata } from './Accordion';
import { atomixGlassMetadata } from './AtomixGlass';
import { avatarMetadata } from './Avatar';
import { badgeMetadata } from './Badge';
import { blockMetadata } from './Block';
import { breadcrumbMetadata } from './Breadcrumb';
import { buttonMetadata } from './Button';
import { buttonGroupMetadata } from './ButtonGroup';
import { calloutMetadata } from './Callout';
import { cardMetadata } from './Card';
import { checkboxMetadata } from './Checkbox';
import { containerMetadata } from './Container';
import { countdownMetadata } from './Countdown';
import { dataTableMetadata } from './DataTable';
import { datePickerMetadata } from './DatePicker';
import { dropdownMetadata } from './Dropdown';
import { edgePanelMetadata } from './EdgePanel';
import { formMetadata } from './Form';
import { gridMetadata } from './Grid';
import { gridColMetadata } from './GridCol';
import { heroMetadata } from './Hero';
import { iconMetadata } from './Icon';
import { inputMetadata } from './Input';
import { listMetadata } from './List';
import { masonryGridMetadata } from './MasonryGrid';
import { masonryGridItemMetadata } from './MasonryGridItem';
import { messagesMetadata } from './Messages';
import { modalMetadata } from './Modal';
import { navMetadata } from './Nav';
import { navDropdownMetadata } from './NavDropdown';
import { navItemMetadata } from './NavItem';
import { navbarMetadata } from './Navbar';
import { paginationMetadata } from './Pagination';
import { popoverMetadata } from './Popover';
import { progressMetadata } from './Progress';
import { radioMetadata } from './Radio';
import { ratingMetadata } from './Rating';
import { riverMetadata } from './River';
import { rowMetadata } from './Row';
import { sectionIntroMetadata } from './SectionIntro';
import { selectMetadata } from './Select';
import { sideMenuMetadata } from './SideMenu';
import { sliderMetadata } from './Slider';
import { spinnerMetadata } from './Spinner';
import { stepsMetadata } from './Steps';
import { tabMetadata } from './Tab';
import { textareaMetadata } from './Textarea';
import { toggleMetadata } from './Toggle';
import { tooltipMetadata } from './Tooltip';
import { uploadMetadata } from './Upload';
import { virtualizedGridMetadata } from './VirtualizedGrid';

export const componentMetadata = [
  accordionMetadata,
  atomixGlassMetadata,
  avatarMetadata,
  badgeMetadata,
  blockMetadata,
  breadcrumbMetadata,
  buttonMetadata,
  buttonGroupMetadata,
  calloutMetadata,
  cardMetadata,
  checkboxMetadata,
  containerMetadata,
  countdownMetadata,
  dataTableMetadata,
  datePickerMetadata,
  dropdownMetadata,
  edgePanelMetadata,
  formMetadata,
  gridMetadata,
  gridColMetadata,
  heroMetadata,
  iconMetadata,
  inputMetadata,
  listMetadata,
  masonryGridMetadata,
  masonryGridItemMetadata,
  messagesMetadata,
  modalMetadata,
  navMetadata,
  navDropdownMetadata,
  navItemMetadata,
  navbarMetadata,
  paginationMetadata,
  popoverMetadata,
  progressMetadata,
  radioMetadata,
  ratingMetadata,
  riverMetadata,
  rowMetadata,
  sectionIntroMetadata,
  selectMetadata,
  sideMenuMetadata,
  sliderMetadata,
  spinnerMetadata,
  stepsMetadata,
  tabMetadata,
  textareaMetadata,
  toggleMetadata,
  tooltipMetadata,
  uploadMetadata,
  virtualizedGridMetadata,
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
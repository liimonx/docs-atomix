// Component metadata index
import { buttonMetadata } from './Button';
import { buttonGroupMetadata } from './ButtonGroup';
import { badgeMetadata } from './Badge';
import { cardMetadata } from './Card';
import { accordionMetadata } from './Accordion';
import { atomixGlassMetadata } from './AtomixGlass';
import { inputMetadata } from './Input';
import { formMetadata } from './Form';
import { avatarMetadata } from './Avatar';
import { breadcrumbMetadata } from './Breadcrumb';
import { dropdownMetadata } from './Dropdown';
import { modalMetadata } from './Modal';
import { tabMetadata } from './Tab';
import { tooltipMetadata } from './Tooltip';
import { selectMetadata } from './Select';
import { textareaMetadata } from './Textarea';
import { spinnerMetadata } from './Spinner';
import { iconMetadata } from './Icon';
import { progressMetadata } from './Progress';
import { toggleMetadata } from './Toggle';
import { popoverMetadata } from './Popover';
import { ratingMetadata } from './Rating';
import { paginationMetadata } from './Pagination';
import { stepsMetadata } from './Steps';
import { sliderMetadata } from './slider';
import { listMetadata } from './List';
import { calloutMetadata } from './Callout';
import { heroMetadata } from './Hero';
import { messagesMetadata } from './Messages';
import { uploadMetadata } from './Upload';
import { countdownMetadata } from './Countdown';
import { blockMetadata } from './Block';
import { navbarMetadata } from './Navbar';
import { checkboxMetadata } from './Checkbox';
import { radioMetadata } from './Radio';
import { datePickerMetadata } from './DatePicker';
import { sectionIntroMetadata } from './SectionIntro';
import { containerMetadata } from './Container';
import { gridMetadata } from './Grid';
import { gridColMetadata } from './GridCol';
import { rowMetadata } from './Row';
import { riverMetadata } from './River';
import { masonryGridMetadata } from './MasonryGrid';
import { masonryGridItemMetadata } from './MasonryGridItem';
import { dataTableMetadata } from './DataTable';
import { edgePanelMetadata } from './EdgePanel';
import { sideMenuMetadata } from './SideMenu';
import { navMetadata } from './Nav';
import { navItemMetadata } from './NavItem';
import { navDropdownMetadata } from './NavDropdown';
import { virtualizedGridMetadata } from './VirtualizedGrid';

export {
  buttonMetadata,
  buttonGroupMetadata,
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
  checkboxMetadata,
  radioMetadata,
  datePickerMetadata,
  sectionIntroMetadata,
  containerMetadata,
  gridMetadata,
  gridColMetadata,
  rowMetadata,
  riverMetadata,
  masonryGridMetadata,
  masonryGridItemMetadata,
  dataTableMetadata,
  edgePanelMetadata,
  sideMenuMetadata,
  navMetadata,
  navItemMetadata,
  navDropdownMetadata,
  virtualizedGridMetadata
};

export const componentMetadata = [
  buttonMetadata,
  buttonGroupMetadata,
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
  checkboxMetadata,
  radioMetadata,
  datePickerMetadata,
  sectionIntroMetadata,
  containerMetadata,
  gridMetadata,
  gridColMetadata,
  rowMetadata,
  riverMetadata,
  masonryGridMetadata,
  masonryGridItemMetadata,
  dataTableMetadata,
  edgePanelMetadata,
  sideMenuMetadata,
  navMetadata,
  navItemMetadata,
  navDropdownMetadata,
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
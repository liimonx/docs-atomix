// Component metadata index
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
import { sliderMetadata } from './slider';
import { spinnerMetadata } from './Spinner';
import { stepsMetadata } from './Steps';
import { tabMetadata } from './Tab';
import { textareaMetadata } from './Textarea';
import { toggleMetadata } from './Toggle';
import { tooltipMetadata } from './Tooltip';
import { uploadMetadata } from './Upload';
import { virtualizedGridMetadata } from './VirtualizedGrid';

export {
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
  virtualizedGridMetadata
};

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
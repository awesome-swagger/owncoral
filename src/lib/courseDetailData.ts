import Fringilla from '../assets/crash-course/fringilla.png';
import Fundamentals from '../assets/crash-course/fundamentals.png';
import Optimization from '../assets/crash-course/optimization.png';
import Sources from '../assets/crash-course/sources.png';
import Understanding from '../assets/crash-course/understanding.png';
import Valuing from '../assets/crash-course/valuing.png';

export type CourseT = {
  name: string;
  image: string;
  lesson: number;
  isComingSoon?: boolean;
  value: { title: string; slides: number; url?: string }[];
};
export const Data: CourseT[] = [
  {
    name: 'Understanding Coral listings',
    image: Understanding,
    lesson: 5,
    isComingSoon: false,
    value: [
      { title: 'Investor cash flow', slides: 7, url: '/academy/unit/cash-flow' },
      { title: 'Ownership structure', slides: 7 },
      { title: 'Operating expenses', slides: 7 },
      { title: 'Capital expenditure', slides: 7 },
      { title: 'Financing with commercial loans', slides: 7 },
      { title: 'Realizing appreciation without selling', slides: 7 },
    ],
  },
  {
    name: 'Real estate fundamentals',
    image: Fundamentals,
    lesson: 4,
    value: [
      { title: 'Basics of real estate investing', slides: 10 },
      { title: 'How to invest in real estate', slides: 5 },
      { title: 'Real estate markets and submarkets', slides: 1 },
      { title: 'What we love about multifamily real estate', slides: 3 },
    ],
  },
  {
    name: 'Drivers of wealth',
    image: Fringilla,
    lesson: 4,
    value: [
      { title: 'Key drivers of wealth through property ownership', slides: 7 },
      { title: 'Cash flow: generating income', slides: 7 },
      { title: 'Appreciation & inflation: increasing property value', slides: 7 },
      { title: 'Tax-Efficiency: benefiting from tax laws', slides: 7 },
      { title: 'Leverage: leverage as a force multiplier', slides: 7 },
    ],
  },
  {
    name: 'Valuing real estate',
    image: Valuing,
    lesson: 2,
    value: [
      { title: 'Key approaches to valuation', slides: 7 },
      { title: 'Income-based method: using cap rate', slides: 7 },
      { title: 'Sales-based method: using comps', slides: 7 },
      { title: 'Net asset value (NAV)', slides: 7 },
    ],
  },
  {
    name: 'Optimization',
    image: Optimization,
    lesson: 5,
    value: [
      { title: 'Ownership structure', slides: 7 },
      { title: 'Investor cash flow', slides: 7 },
      { title: 'Operating expenses', slides: 7 },
      { title: 'Capital expenditure', slides: 7 },
      { title: 'Financing with commercial loans', slides: 7 },
      { title: 'Realizing appreciation without selling', slides: 7 },
    ],
  },
  {
    name: 'Sources',
    image: Sources,
    lesson: 5,
    value: [
      { title: 'Ownership structure', slides: 7 },
      { title: 'Investor cash flow', slides: 7 },
      { title: 'Operating expenses', slides: 7 },
      { title: 'Capital expenditure', slides: 7 },
      { title: 'Financing with commercial loans', slides: 7 },
      { title: 'Realizing appreciation without selling', slides: 7 },
    ],
  },
];

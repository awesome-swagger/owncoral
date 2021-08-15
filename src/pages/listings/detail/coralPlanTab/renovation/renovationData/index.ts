import CurbAppeal from '../../../../../../assets/renovation/curb-appeal.png';
import Floorplan from '../../../../../../assets/renovation/floorplan.png';
import Bathroom from '../../../../../../assets/renovation/bathroom.png';
import Bedroom from '../../../../../../assets/renovation/bathroom.png';
import Kitchen from '../../../../../../assets/renovation/kitchen.png';
import Structural from '../../../../../../assets/renovation/structure.png';
import Roof from '../../../../../../assets/renovation/roof.png';
import Utility from '../../../../../../assets/renovation/utility.png';

export const RenovationData = [
  {
    title: 'curb appeal',
    image: CurbAppeal,
    renovationList: ['Paint the building exterior', 'Install new landscaping', 'replace fencing'],
  },
  {
    title: 'floorplan',
    image: Floorplan,
    renovationList: [
      'Knock-out wall between kitchen and bedroom to create open living-kitchen concept',
      'Convert living into bedroom and add closet; convert bedroom into living room',
    ],
  },
  {
    title: 'bathroom',
    image: Bathroom,
    renovationList: ['Add second bathroom to all three units by converting entry closet'],
  },
  {
    title: 'bedroom',
    image: Bedroom,
    renovationList: ['Add second bedroom to all three units by converting entry closet'],
  },
  {
    title: 'kitchen',
    image: Kitchen,
    renovationList: [
      'Unit 1: Fully renovate: new appliances, flooring, fixtures, countertops, cabinets',
      'Unit 2: Partial kitchen renovation',
      'Unit 3: Minimal updates to kitchen',
    ],
  },
  {
    title: 'structural',
    image: Structural,
    renovationList: ['Repairs to resolve leak in basement'],
  },
  { title: 'roof', image: Roof, renovationList: ['Repair roof at site of roof leak'] },
  { title: 'utility', image: Utility, renovationList: ['Repair roof at site of roof leak'] },
];

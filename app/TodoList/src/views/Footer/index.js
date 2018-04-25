import React from 'react';
import Link from '../../routers/LinkRouter';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/Config';

const Footer = props => (
  <div>
    <span>Show: </span>
    <Link filter={SHOW_ALL}>
      All
    </Link>
    <Link filter={SHOW_ACTIVE}>
      Active
    </Link>
    <Link filter={SHOW_COMPLETED}>
      Completed
    </Link>
  </div>
);

export default Footer;

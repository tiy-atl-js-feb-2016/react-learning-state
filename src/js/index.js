// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import Interval from './interval';
import Reveal from './reveal';
import Counter from './counter';
import Dropper from './dropper';

render(
  <Dropper/>
  , document.querySelector('.app')
);

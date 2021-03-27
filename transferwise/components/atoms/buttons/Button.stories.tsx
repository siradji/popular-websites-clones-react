import React from 'react';

import { Story } from '@storybook/react';
import {ButtonFill} from './Button';
import { ButtonFillProps } from '../../../interfaces';


//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonFillProps> = (args) => <ButtonFill {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  
  onClick: () => {},
  bgColor: 'red',
  color: 'eee'
}
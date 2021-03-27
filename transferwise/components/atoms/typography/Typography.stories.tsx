import React from 'react';

import { Story } from '@storybook/react';
import  {Heading } from './Heading';
import { HeadingInterface } from '../../../interfaces';


const Template: Story<HeadingInterface> = (args) => <Heading {...args}>Hello wolrd</Heading>;

export const Primary = Template.bind({});

Primary.args = {
  color: 'eee',
}
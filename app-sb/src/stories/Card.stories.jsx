import React from 'react';

import Card  from '../components/Card/Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Border = Template.bind({});
Border.args = {
    border:true
};
export const Small = Template.bind({});
Small.args = {
  size: 'sizeSmall',
  label: 'Card Small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'sizeMedium',
  label: 'Card Medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'sizeLarge',
  label: 'Card Large',
};



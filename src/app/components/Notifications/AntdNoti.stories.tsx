import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AntdNoti from './AntdNoti';

export default {
  title: 'Antd/Notifications',
  component: AntdNoti,
} as ComponentMeta<typeof AntdNoti>;

const Template: ComponentStory<typeof AntdNoti> = (args) => (
  <AntdNoti {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  data: {
    count: 1000,
    overflowCount: 999,
  },
};

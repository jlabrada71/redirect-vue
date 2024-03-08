import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TaskPriorities from '../TaskPriorities.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const tasks = [
      { id: 1, name: 'Task 1', description: 'Some description', urgency: 1, impact: 1},
      { id: 2, name: 'Task 2', description: 'Some description', urgency: 1, impact: 2},
      { id: 3, name: 'Task 3' , description: 'Some description', urgency: 2, impact: 1 },
      { id: 4, name: 'Task 4' , description: 'Some description', urgency: 2, impact: 2 },
      { id: 5, name: 'Task 5' , description: 'Some description', urgency: 2, impact: 2 },
    ];
    const wrapper = mount(TaskPriorities, { props: { tasks } });
    expect(wrapper.text()).toContain('Task 1');
    expect(wrapper.text()).toContain('Task 2');
    expect(wrapper.text()).toContain('Task 3');
    expect(wrapper.text()).toContain('Task 4');
  })
})

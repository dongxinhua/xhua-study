import { shallowMount } from '@vue/test-utils';
import Count from '@/common/components/Count.vue';

describe('Count.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Count, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

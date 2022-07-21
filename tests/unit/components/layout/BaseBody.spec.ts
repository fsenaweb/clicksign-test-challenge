import { mount } from '@vue/test-utils'
import BaseBody from '@/components/layout/BaseBody.vue'

describe('BaseBody', () => {
  const mountWrapper = () => {
    const wrapper = mount(BaseBody)

    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.classes()).toContain('body-content')
  })
})

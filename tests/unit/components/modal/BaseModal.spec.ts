import { mount } from '@vue/test-utils'
import BaseModal from '@/components/modal/BaseModal.vue'

describe('BaseModal', () => {
  const mountWrapper = () => {
    const wrapper = mount(BaseModal)
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.classes()).toContain('modal')
  })
})

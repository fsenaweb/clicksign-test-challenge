import { mount } from '@vue/test-utils'
import CadContact from '@/components/forms/CadContact.vue'
import CancelButton from '@/components/buttons/CancelButton.vue'
import SaveButton from '@/components/buttons/SaveButton.vue'

describe('CadContact', () => {
    const mountWrapper = () => {
    const wrapper = mount(CadContact)

    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should handle click cancel events', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.findComponent(CancelButton)

    await button.trigger('click')

    expect(button.emitted()).toBeTruthy()
  })

  it('should handle click save events', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.findComponent(SaveButton)

    await button.trigger('click')

    expect(button.emitted()).toBeTruthy()
  })
})

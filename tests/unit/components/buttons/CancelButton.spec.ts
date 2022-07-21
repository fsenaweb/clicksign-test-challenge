import { mount } from '@vue/test-utils'
import CancelButton from '@/components/buttons/CancelButton.vue'

describe('CancelButton', () => {
  const mountWrapper = () => {
    const wrapper = mount(CancelButton)
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should show title on instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.text()).toContain('Cancelar')
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.find('button')

    expect(button.classes()).toContain('btn-cancel')
  })
})

import { mount } from '@vue/test-utils'
import SaveButton from '@/components/buttons/SaveButton.vue'

describe('SaveButton', () => {
  const mountWrapper = () => {
    const wrapper = mount(SaveButton)
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should show title on instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.text()).toContain('Salvar')
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.find('button')

    expect(button.classes()).toContain('btn-save')
  })
})

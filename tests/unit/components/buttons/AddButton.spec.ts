import { mount } from '@vue/test-utils'
import AddButton from '@/components/buttons/AddButton.vue'

describe('AddButton', () => {
  const mountWrapper = () => {
    const wrapper = mount(AddButton)
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should show title on instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.text()).toContain('Criar Contato')
  })
})

import { mount } from '@vue/test-utils'
import DeleteButton from '@/components/buttons/DeleteButton.vue'

describe('DeleteButton', () => {
  const mountWrapper = () => {
    const wrapper = mount(DeleteButton)
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should show title on instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.text()).toContain('Excluir')
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.find('button')

    expect(button.classes()).toContain('btn-save')
  })
})

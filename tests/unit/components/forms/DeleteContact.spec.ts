import { mount } from '@vue/test-utils'
import DeleteContact from '@/components/forms/DeleteContact.vue'
import CancelButton from '@/components/buttons/CancelButton.vue'
import DeleteButton from '@/components/buttons/DeleteButton.vue'

describe('DeleteContact', () => {
  const mountWrapper = () => {
    const wrapper = mount(DeleteContact)

    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should render a text', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.text()).toContain(
      'Deseja realmente excluir o contato?'
    )
  })

  it('should handle click cancel events', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.findComponent(CancelButton)

    await button.trigger('click')

    expect(button.emitted()).toBeTruthy()
  })

  it('should handle click delete events', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.findComponent(DeleteButton)

    await button.trigger('click')

    expect(button.emitted()).toBeTruthy()
  })
})

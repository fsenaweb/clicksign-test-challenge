import { mount } from '@vue/test-utils'
import EmptyTable from '@/components/tables/EmptyTable.vue'
import AddButton from '@/components/buttons/AddButton.vue'

describe('EmptyTable', () => {
  const mountWrapper = () => {
    const wrapper = mount(EmptyTable)
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.classes()).toContain('table-empty')
  })

  it('should render a text', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.text()).toContain(
      'Nenhum contato foi criado ainda.'
    )
  })

  it('should when clicked AddButton the function emmited props', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.findComponent(AddButton)

    await button.trigger('click')

    expect(button.emitted()).toBeTruthy()
  })
})

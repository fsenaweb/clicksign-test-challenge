import { mount } from '@vue/test-utils'
import SearchButton from '@/components/buttons/SearchButton.vue'

describe('SearchButton', () => {
  const mountWrapper = () => {
    const wrapper = mount(SearchButton)
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should show title on instance', () => {
    const { wrapper } = mountWrapper()

    const image = wrapper.find('img')

    expect(image.exists()).toBe(true)
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.find('button')

    expect(button.classes()).toContain('btn-search')
  })
})

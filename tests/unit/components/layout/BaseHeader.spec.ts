import { mount, RouterLinkStub } from '@vue/test-utils'
import { createStore } from 'vuex'
import BaseHeader from '@/components/layout/BaseHeader.vue'
import AddButton from '@/components/buttons/AddButton.vue'
import SearchButton from '@/components/buttons/SearchButton.vue'

describe('BaseHeader', () => {
  const mountWrapper = () => {
    const store = createStore({
      state () {
        return {
          contacts: [
            {
              id: 1,
              name: 'John',
              email: 'john@gmail.com',
              phone: '(88) 55555-1234'
            }
          ]
        }
      }
    })

    const wrapper = mount(BaseHeader, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        },
        plugins: [store]
      }
    })

    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.vm).toBeTruthy()
  })

  it('should find a default class', async () => {
    const { wrapper } = mountWrapper()

    expect(wrapper.classes()).toContain('header')
  })

  it('should find a input search', async () => {
    const { wrapper } = mountWrapper()

    const inputSearch = wrapper.find('.input_search')

    expect(inputSearch.classes()).toBeTruthy()
  })

  it('should when clicked AddButton the function emmited props', async () => {
    const { wrapper } = mountWrapper()

    const button = wrapper.findComponent(AddButton)

    await button.trigger('click')

    expect(button.emitted()).toBeTruthy()
  })

  it('should when write a example text and clicked SearchButton the function emmited props', async () => {
    const { wrapper } = mountWrapper()

    const input = wrapper.find('input')

    await input.setValue('example')

    const button = wrapper.findComponent(SearchButton)

    await button.trigger('click')

    expect(wrapper.emitted('search-contact')).toEqual([['example']
    ])

    expect(button.emitted()).toBeTruthy()
  })

  it('should when no store data lenght, the Addbutton not show', async () => {
    const internalStore = createStore({
      state () {
        return {
          contacts: [
            {
              id: 1,
              name: 'John',
              email: 'john@gmail.com',
              phone: '(88) 55555-1234'
            }
          ]
        }
      }
    })

    const wrapper = mount(BaseHeader, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        },
        plugins: [internalStore]
      }
    })

    const button = wrapper.findComponent(AddButton)

    expect(button.exists()).toBe(true)
  })
})

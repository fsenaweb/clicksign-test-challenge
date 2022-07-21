import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TableList from '@/components/tables/TableList.vue'
import AddButton from '@/components/buttons/AddButton.vue'

describe('TableList', () => {
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

  const mountWrapper = () => {
    const wrapper = mount(TableList, {
      global: {
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

    expect(wrapper.classes()).toContain('table-list')
  })

  it('should when clicked icon edit the function emmited with value id contact', async () => {
    const { wrapper } = mountWrapper()

    const iconEdit = wrapper.findAll('img')[0]

    await iconEdit.trigger('click')

    expect(wrapper.emitted('edit-data')).toEqual([[1]])

    expect(wrapper.emitted()).toBeTruthy()
  })

  it('should when clicked icon delete the function emmited with value completed user', async () => {
    const { wrapper } = mountWrapper()

    const iconEdit = wrapper.findAll('img')[1]

    await iconEdit.trigger('click')

    expect(wrapper.emitted('delete-data')).toEqual([
      [
        {
          id: 1,
          name: 'John',
          email: 'john@gmail.com',
          phone: '(88) 55555-1234'
        }
      ]
    ])

    expect(wrapper.emitted()).toBeTruthy()
  })
})

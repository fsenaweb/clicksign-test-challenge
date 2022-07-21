import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import EditContact from '@/components/forms/EditContact.vue'
import CancelButton from '@/components/buttons/CancelButton.vue'
import SaveButton from '@/components/buttons/SaveButton.vue'

describe('EditContact', () => {

  const store = createStore({
    state () {
      return {
        contact: {
          id: 1,
          name: 'John',
          email: 'john@gmail.com',
          phone: '(88) 55555-1234'
        }
      }
    }
  })

  const mountWrapper = () => {
    const wrapper = mount(EditContact, {
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

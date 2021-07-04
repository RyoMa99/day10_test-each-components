import { shallowMount } from '@vue/test-utils'
import MyButton from '../index.vue'

test('Hello', async () => {
  // コンポーネントを描画します
  const wrapper = shallowMount(MyButton)

  // `username`は空白を除外して7文字未満は許されません
  wrapper.setData({ username: ' '.repeat(7) })

  // エラーが描画されることをアサートします
  expect(wrapper.find('.error').exists()).toBe(true)

  // 名前を十分な長さにします
  await wrapper.setData({ username: 'Lachlan' })

  // エラーがなくなったことをアサートします
  expect(wrapper.find('.error').exists()).toBe(false)
})

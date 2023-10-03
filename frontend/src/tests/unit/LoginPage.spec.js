import { Vue, extend } from 'vue'
import LoginPage from '../../pages/LoginPage.vue'
import { describe, it, expect } from "vitest";

describe('LoginPage.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(LoginPage)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('h1').textContent)
            .toEqual('TaskAgile')
    })
})
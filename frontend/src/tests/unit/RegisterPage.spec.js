import {beforeEach, describe, it, expect } from "vitest";
import RegisterPage from "/@pages/RegisterPage.vue";
import { mount } from '@vue/test-utils'
import Vue from 'vue'

// describe('RegisterPage.vue', () => {
//     it('should reneder correct contents', () =>{
//         const Constructor = Vue.extend(RegisterPage);
//         const vm = new Constructor().$mount();
//         expect(vm.$el.querySelector('.logo').getAttribute('src'))
//             .toEqual('/static/images/logo.png')
//         expect(vm.$el.querySelector('.tagline').textContent)
//             .toEqual('Open source task management tool')
//         expect(vm.$el.querySelector('#username').value).toEqual('')
//         expect(vm.$el.querySelector('#emailAddress').value).toEqual('')
//         expect(vm.$el.querySelector('#password').value).toEqual('')
//         expect(vm.$el.querySelector('form button[type="submit"]').textContent).toEqual('')
//     })
// })

describe('RegisterPage.vue', () => {
    let wrapper
    let fieldUsername
    let fieldEmailAddress
    let fieldPassword
    let buttonSubmit

    beforeEach(() => {
        wrapper = mount(RegisterPage)
        fieldUsername = wrapper.find('#username')
        fieldEmailAddress = wrapper.find('#emailAddress')
        fieldPassword = wrapper.find('#password')
        buttonSubmit = wrapper.find('form button[type="submit"]')
    });

    it('should render registration form', () => {
        expect(wrapper.find('.logo').attributes().src)
            .toEqual('/static/images/logo.png')
        expect(wrapper.find('.tagline').text())
            .toEqual('Open source task management tool')
        expect(fieldUsername.element.value).toEqual('')
        expect(fieldEmailAddress.element.value).toEqual('')
        expect(fieldPassword.element.value).toEqual('')
    })

    it('should contain data model with initial values', () => {
        expect(wrapper.vm.form.username).toEqual('')
        expect(wrapper.vm.form.emailAddress).toEqual('')
        expect(wrapper.vm.form.password).toEqual('')
    })

    it('should have form inputs bound with data model', () => {
        const username = 'sunny'
        const emailAddress = 'sunny@taskagile.com'
        const password = 'VueJsRocks!'

        wrapper.vm.form.username = username
        wrapper.vm.form.emailAddress = emailAddress
        wrapper.vm.form.password = password
        expect(fieldUsername.element.value).toEqual(username)
        expect(fieldEmailAddress.element.value).toEqual(emailAddress)
        expect(fieldPassword.element.value).toEqual(password)
    })

    it('should have form submit event handler `submitForm`', () => {
        const stub = jest.fn()
        wrapper.setMethods({submitForm: stub})
        buttonSubmit.trigger('submit')
        expect(stub).toBeCalled()
    })

    it('should fail when the email address is invalid', () => {
        wrapper.vm.form.username = 'test'
        wrapper.vm.form.emailAddress = 'bad-email-address'
        wrapper.vm.form.password = 'JestRocks!'
        wrapper.vm.submitForm()
        expect(registerSpy).not.toHaveBeenCalled()
    })
})
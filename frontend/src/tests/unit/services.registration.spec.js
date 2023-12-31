import moxios from 'moxios'
import {beforeEach, describe, afterEach, it, expect } from "vitest";
import registrationService from '/@service/registration'

// Adding Vue Router to the test so that
// we can access vm.$router
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuelidate)
const router = new VueRouter()

// Mock dependency registratioService
jest.mock('@/services/registration')
describe('service/registration', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('should pass the response to caller when request succeeded', () => {
        expect.assertions(2)
        moxios.wait(() => {
            let request = moxios.requests.mostRecent()
            expect(request).toBeTruthy()
            request.respondWith({
                status: 200,
                response: {result: 'success'}
            })
        })
        return registrationService.register().then(data => {
            expect(data.result).toEqual('success')
        })
    })


    it('should propagate the error to caller when request failed', () => {
        expect.assertions(2)
        moxios.wait(() => {
            let request = moxios.requests.mostRecent()
            expect(request).toBeTruthy()
            request.reject({
                status: 400,
                response: {message: 'Bad request'}
            })
        })
        return registrationService.register().catch(error => {
            expect(error.response.message).toEqual('Bad request')
        })
    })
})
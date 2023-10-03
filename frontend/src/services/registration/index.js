import axios from "axios";

export default {
    register(detail){
        return new Promise((resolve, reject) => {
            axios.post('/registrations', defail).then(({data}) => {
                resolve()
            }).catch((error) => {
                reject(error)
            })

        })
    }
}
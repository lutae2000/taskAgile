import axios from "axios";

export default {
    register(detail){
        return new Promise((resolve, reject) => {
            axios.post('/registrations', detail).then(({data}) => {
                resolve()
            }).catch((error) => {
                reject(error)
            })
        })
    }
}
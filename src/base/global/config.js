import {
    env
} from './g'
export default {
    baseUrl: env === 'production' ? '' : '/dev'
}

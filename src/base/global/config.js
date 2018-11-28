import {
    env
} from './g'
export default {
    // eslint-disable-next-line
    baseUrl: env == 'production' ? '' : '/dev'
}

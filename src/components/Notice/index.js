import Notice from './Notice.vue'
import create from '../../utils/create'

function init(params) {
   let msg = null
   if (typeof(params) === 'string') {
      msg =  new create(Notice, {message: params})
   } else {
      msg = new create(Notice, params)
   }
   msg.show()
}

 Notice.install = function(Vue) {
    Vue.prototype.$notice = init
 }
 export default Notice
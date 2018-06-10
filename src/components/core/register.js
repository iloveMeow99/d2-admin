import Vue from 'vue'

Vue.component('d2-container', resolve => { require(['@/components/core/d2-container'], resolve) })
Vue.component('d2-count-up', resolve => { require(['@/components/core/d2-count-up'], resolve) })
Vue.component('d2-highlight', resolve => { require(['@/components/core/d2-highlight'], resolve) })
Vue.component('d2-icon', resolve => { require(['@/components/core/d2-icon'], resolve) })
Vue.component('d2-icon-select', resolve => { require(['@/components/core/d2-icon-select/index.vue'], resolve) })
Vue.component('d2-icon-svg', resolve => { require(['@/components/core/d2-icon-svg/index.vue'], resolve) })
Vue.component('Markdown', resolve => { require(['@/components/core/Markdown'], resolve) })
Vue.component('QuillEditor', resolve => { require(['@/components/core/QuillEditor'], resolve) })
Vue.component('SimpleMDE', resolve => { require(['@/components/core/SimpleMDE'], resolve) })

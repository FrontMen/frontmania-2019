import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('date', input => {
  return format(input, 'DD.MM')
})

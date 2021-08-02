export default {
  install(Vue) {
    Vue.filter('normalizeMoney', function(value) {
      if (!value) {
        return '--'
      }
      value = value.toString()
      let minusStr = ''
      let startStr = ''
      let endStr = ''
      if (/-/.test(value)) {
        minusStr = '-'
        value = value.slice(1)
      }
      startStr = value.split('.')[0]
      endStr = value.split('.')[1] || ''
      if (endStr) {
        if (endStr.length === 1) {
          endStr = endStr + '0'
        }
        if (endStr.length > 2) {
          endStr = endStr.slice(0, 2)
        }
      } else {
        endStr = '00'
      }

      if (startStr) {
        startStr = startStr.replace(/(?!^)(?=(\d{3})+$)/g, ',')
      }
      return minusStr + startStr + '.' + endStr
    })
  }
}

/**
 * @description 作为函数调用的金额数格式化函数
 * @param {String|Number} value
 */
export const normalizeMoney = value => {
  if (!value) {
    return '--'
  }
  value = value.toString()
  let minusStr = ''
  let startStr = ''
  let endStr = ''
  if (/-/.test(value)) {
    minusStr = '-'
    value = value.slice(1)
  }
  startStr = value.split('.')[0]
  endStr = value.split('.')[1] || ''
  if (endStr) {
    if (endStr.length === 1) {
      endStr = endStr + '0'
    }
    if (endStr.length > 2) {
      endStr = endStr.slice(0, 2)
    }
  } else {
    endStr = '00'
  }

  if (startStr) {
    startStr = startStr.replace(/(?!^)(?=(\d{3})+$)/g, ',')
  }
  return minusStr + startStr + '.' + endStr
}

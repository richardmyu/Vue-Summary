export const getBaseInfo = () => {
  return new Promise((resolve, reject) => {
    const menuInfo = [
      '2',
      '2-1',
      '2-1-1',
      '2-1-2',
      '2-1-3',
      '2-2',
      '2-2-1',
      '2-2-2',
      '3',
      '3-1',
      '3-2',
      '3-3',
      '3-4',
      '3-5',
      '3-6',
      '3-7',
      '3-8',
      '3-9',
      '3-10',
      '3-11',
      '3-12',
      '3-13',
      '3-14'
    ]
    if (!menuInfo) {
      return reject('no-menu')
    }
    resolve({ menu: menuInfo })
  })
}

const MP = require('stream').PassThrough // require('./')
const mp = new MP()
const wait = (n) => new Promise(resolve => setTimeout(resolve, n))
const t = require('tap')

t.test('end ordering', async t => {
  mp.on('end', _ => console.log('end'))
  mp.end()
  console.log('called end')
  // mp.resume()
  // console.log('called resume()')
  // mp.read()
  // console.log('called read')
  mp.on('data', _=>_)
  console.log('added data handler')
  await wait(1)
})
;

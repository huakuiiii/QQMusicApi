// vkey
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
  const data = {
    cid: 205361747,
    songmid: '',
    filename: '',
    guid: 3655047200
  }
  router.get('/', (req, res, next) => {
    let {songmid} = req.query
    if (!songmid) {
      res.status(400).json({code: 400, data: null, msg: 'no keyword albummid'})
    }
    const filename = `C400${songmid}.m4a`
    Object.assign(data, {songmid, filename})
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
      res.status(500).json(err)
    })
  })
  return router
}

module.exports = consRouter
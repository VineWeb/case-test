import createPoster from '../../utils/index.js'
Page({

	data: {
		src: '',
		width: 0,
		height: 0,
		canvas: null
	},
	onLoad: function (options) {
		// console.log('utils',createPoster)
	},
	initPoster () {
		const query = wx.createSelectorQuery()
    query.select('#canvas')
      .fields({ node: true, size: true })
      .exec(async (res) => {
				// console.log(res[0], 'canvas')
				const canvas = res[0].node
				const width = res[0].width
        const height = res[0].height
				const url = await createPoster(canvas, width, height)
				// console.log(url, 'url')
				this.setData({
					canvas,
					width,
					height
				})
      })
	},
	testPoster () {
		const query = wx.createSelectorQuery()
    query.select('#canvas-1')
      .fields({ node: true, size: true })
      .exec((res) => {
				console.log(res[0], 'canvas1')
				const canvas = res[0].node
				const ctx = canvas.getContext('2d')
				ctx.font = "32px serif";
				ctx.fillStyle= "blue"
				ctx.fillText("Hello world", 50, 90);
      })
	},
	onCreatePoster () {
		console.log('点击生成画布')
		this.downLoadPoster()
	},
	downLoadPoster () {
		const {canvas, width, height} = this.data
		const {pixelRatio: dpr} =  wx.getWindowInfo()
		wx.canvasToTempFilePath({
			width: width*dpr,
			height: height*dpr,
			destWidth: width *dpr,
			destHeight: height*dpr,
			canvas,
			success: res => {
				console.log(res.tempFilePath)
				const filePath = res.tempFilePath
				wx.saveImageToPhotosAlbum({
					filePath,
					success: saveRes => {
						wx.showModal({
							title: '保存成功!',
							content: '图片已保存到本地相册',
							showCancel: false,
							success: comfirmRes => {
								if (comfirmRes.confirm) {
									console.log('点击确定')
								}
							}
						})
					}
				})
				const src = canvas.toDataURL('image/png')
				console.log('@@canvas:', canvas.toDataURL('image/png'))
				this.setData({
					src
				})
			}
		})
	},

	bindtouchstart (e) {
		console.log('@@bindtouchstart:', e)
	},
	bindtouchend (e) {
		console.log('@@bindtouchend:', e)
	},
	onShow: function () {
		this.initPoster()
	},

})
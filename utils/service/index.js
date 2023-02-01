// todo 待修改
import { TOKEN_KEY } from '@/constants/token-const.js'

const BASE_URL = 'http://121.41.83.105/mercury/api/company'

class BSGJRequest {
	constructor(baseURL, authHeader = {}) {
		this.baseURL = baseURL
		this.authHeader = authHeader
	}

	request(url, method, params, isAuth = true, header = {}) {
		if (uni.getStorageSync(TOKEN_KEY) !== '') {
			var token = { 'Authorization': 'Bearer ' + uni.getStorageSync(TOKEN_KEY) }
		}
		const finalHeader = isAuth ? {
			...this.authHeader,
			...header,
			...token
		} : {
			...header,
			...token
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.baseURL + url,
				method: method,
				header: finalHeader,
				data: params,
				success: function(res) {
					resolve(res.data)
				},
				fail: reject
			})
		})
	}
	get(url, params, header) {
		return this.request(url, 'GET', params, header)
	}
	post(url, data, header) {
		return this.request(url, 'POST', data, header)
	}
	del(url, data, header) {
		return this.request(url, 'DELETE', data, header)
	}
	put(url, data, header) {
		return this.request(url, 'PUT', data, header)
	}
	// 需要在post后面像get一样拼接字符串
	postGet(url, data, header) {
		const keys = Object.keys(data)
		let params = '?'
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i]
			let value = data[key]
			if (value !== null && value !== '') {
				if (i !== 0) {
					params += '&'
				}
				//对特殊字符进行转义
				value = encodeURIComponent(value)
				params += key + '=' + value
			}
		}
		return this.request(url + params, 'POST', header)
	}
}
const bsgjRequest = new BSGJRequest(BASE_URL)
export default bsgjRequest

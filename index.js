import * as dotenv from 'dotenv'
dotenv.config()
import got from 'got'

const {API_KEY, API_SECRET, CLOUD_NAME} = process.env
const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload?max_results=500`

if (!API_KEY) throw new Error('missing api key')
if (!API_SECRET) throw new Error('missing api secret')
if (!CLOUD_NAME) throw new Error('missing cloud name')

async function main(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	const response = await got(url, {
		auth: `${API_KEY}:${API_SECRET}`,
		json: true
	})
	return response.body
}

export default main
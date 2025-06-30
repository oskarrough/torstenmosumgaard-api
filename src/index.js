export default {
	async fetch(request, env, ctx) {
		const url = `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/resources/image/upload?max_results=500`
		const response = await fetch(url, {
			headers: {
				'Authorization': `Basic ${btoa(`${env.CLOUDINARY_API_KEY}:${env.CLOUDINARY_API_SECRET}`)}`
			}
		})
		const data = await response.json()
		return new Response(JSON.stringify({resources: data.resources}), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	},
};

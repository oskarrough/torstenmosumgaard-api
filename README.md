A Cloudflare worker that fetches all images from a Cloudinary account and returns them as JSON.

https://torstenmosumgaard-api.0skar.workers.dev/

Why? Cloudinary requires authentication before you can fetch images. Since you don't want to do this in the front-end, this authenticates for you and returns all images unfiltered as JSON.

It is a handy way to create large galleries with all the (mostly free!) advantages Cloudinary offers for responsive images, performance and image hosting. As an example, the website https://torstenmosumgaard.dk is fetching its images from this function.

## How to use

Find your keys in the [Cloudinary console](https://cloudinary.com/console).

> As long as you set the three environment variables, you should be able to deploy it to any node host.

Learn more at https://developers.cloudflare.com/workers/


## Envrironment variables

```
wrangler secrets put CLOUDINARY_API_KEY
wrangler secrets put CLOUDINARY_API_SECRET
wrangler secrets put CLOUDINARY_CLOUD_NAME
```

or add to `.dev.vars`.

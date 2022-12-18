# Cloudinary Endpoint

https://torstenmosumgaard-api.vercel.app/api/images

> A single HTTP endpoint to fetch all images from a Cloudinary account

Why? Cloudinary requires authentication before you can fetch images. Since you don't want to do this in the front-end, this Node.js microservice authenticates for you and returns all images unfiltered as JSON.

It is a handy way to create large galleries with all the (mostly free!) advantages Cloudinary offers for responsive images, performance and image hosting. As an example, the website https://torstenmosumgaard.dk is fetching its images from this function.

## How to use

Find your keys in the [Cloudinary console](https://cloudinary.com/console).

Alternatively (still using `now`), you can also store your keys in an `.env` file. Clone this repository, `cp .example-env .env`, add your Cloudinary keys to it and run `yarn deploy`.

> As long as you set the three environment variables, you should be able to deploy it to any node host.


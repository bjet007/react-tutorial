mmm-push-it-ui
===================================================

This UI must deploy internally because it's unsecure.


# usage

## deploy application
to use the project, there a docker file available

run
* `docker pull docker-registry.tritondigital.com/mmm-push-it-ui`
* `docker run -d -p 3000:3000 -e NODE_ENV=production docker-registry.tritondigital.com/mmm-push-it-ui`, then you can access application at ip:3000, where ip is the docker server ip.

## server
start the server `npm start`

start the server in dev mode `npm run start:dev`

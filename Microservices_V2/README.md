# About This Version

This version of System has:
> production built frontend(client) code with nginx

> other microservices as it is

## Key changes
> changes in frontend code (upgraded to react)

> for production build ~ `npm run build`
> </br> this will create build folder which contains static html files

> nginx & frontend codes are build together in a single dockerfile. So now the frontend service isn't required in docker-compose.


# Usages
> got to the terminal at Microservices_V2 dir & hit ~ `docker-compose up -d --build`
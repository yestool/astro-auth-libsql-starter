# Astro Auth libsSQL Starter


## Set DB 
```
ASTRO_DB_REMOTE_URL=()
ASTRO_DB_APP_TOKEN=
```

```
 docker build --no-cache  -t astro-start .   


 docker run -d -p 4321:4321 --env-file .env astro-start  
```
---
id: 'de-zc-w1'
title: 'Data Engineering Zoomcamp, Week 1'
tags: ["Docker", "Python", "PostgreSQL"]
date: '2023-01-02'
--- 



The first week's content revolves around setting up our environment using Docker. Below are some key commands used:

### Create a Docker network:

```docker network create pg-network
winpty docker run -it \
-e POSTGRES_USER="root" \
-e POSTGRES_PASSWORD="root" \
-e POSTGRES_DB="ny_taxi" \
-p 5432:5432 \
--network=pg-network \
--name pg-database \
-v c://Users//Jonah//Desktop//JonahsPortfolio//data-engineering-zoomcamp//my_week_1//2_docker_sql//ny_taxi_postgres_data:/var/lib/postgresql/data \
postgres:13 
```
---
id: container-docker
title: Docker container
description: Process, image layer, registry, limits
topic: container
draft: false
tags:
---


## Quelle différence entre une VM et un container ?

Deux philosophies: 
* Systeme : simule une séquence de boot complète avec un init process ainsi que plusieurs processus (LXC, OpenVZ)
* Process : un conteneur exécute un ou plusieurs processus directement, en fonction de l'application conteneurisée (Docker, Rkt).

Virtualisation dans le cloud : 
* Ressources compute : virtualisation
* Virtualisation complète : KVM, Xen
* Virtualisation conteneurs : OpenVZ, LXC, Docker, RKT

## Qu'est-ce qu'un Cgroup ?

Permet de limiter l'usage de la mémoire / CPU pour un groupe de process

```bash
/sys/fs/cgroup/*
```

## Qu'est-ce qu'un namespace ?

Permet aux process d'avoir leur propre :
* réseau
* PIDs
* hostname
* mounts
* users

Liste les namespaces d'un process

```bash
lsns -p 273
```

## Qu'est-ce que les capabilities ?

Permet d'assigner des autorisations


## Définitons de CRI, CNI et CSI ?


### Container Runtime Interface (CRI)

Container Runtime: 
* containerd (la référence)
* CRI-O 
* Docker (historique)
* kata containers: Conteneurs dans des VMs

[Plus d'infos sur l'OCI Runtime tools](https://github.com/opencontainers/runtime-tools)


### Container Network Interface (CNI)

[Plus d'infos sur la CNI](https://github.com/containernetworking/cni)


### Container Storage Interface (CSI)

[Plus d'infos sur la CSI](https://github.com/container-storage-interface/spec/blob/master/spec.md)


## Quels sont les deux éléments nécessaire à l'éxécution d'un container ?


* image layer : définition du container
* registry : serveur qui sert les images


### Image layer

Exemple de Dockerfile d'une application Node

```Dockerfile
# The build image
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json /app
COPY . /app
RUN npm ci 
 
# The production image
FROM node:lts-alpine
WORKDIR /app
USER node
EXPOSE 8080
COPY --chown=node:node --from=build /app /app
CMD ["node", "index.js"]
```

> Note: le multistage permet d'optimiser l'image finale en gardant que les artefacts souhaités

Build de l'image dans le registre local

```bash
docker build -t mine/node .
```

Executer le container sur le port 8181 de la machine

```bash
 docker run --rm -p 8181:8080  mine/node
```

Lire les logs

```bash
docker logs mine/node
```



#### sauvegarder une image en .tar 

```bash
docker save -o myimage.tar mine/node
```

## Citer plusieurs types de réseaux ?

Il exite plusieurs types de réseau 
* bridge
* host
* overlay
* ipvlan
* macvlan
* none



[Plus d'infos sur les réseaux](https://docs.docker.com/network/) 


Lister les réseaux 

```bash
docker network ls

NETWORK ID     NAME            DRIVER    SCOPE
41acc3619b24   bridge          bridge    local
406384df45cf   host            host      local
d0bbee684cb8   none            null      local

```

Création d'un réseau de type bridge avec un subnet donné

```bash
docker network create --driver=bridge --subnet=192.168.0.0/24 mybridge
```

Vérification de notre réseau bridge

```bash
docker network inspect mybridge

[
    {
        "Name": "mybridge",
        "Id": "43f39ce8b1fbf25a7ca305c76cb97eb2d0fae69c982617e2e721cb919eec4a90",
        "Created": "2023-02-15T16:47:40.019087234+01:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "192.168.0.0/24",
                    "Gateway": "192.168.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]

```     


Container in this network

```bash
docker run -itd --network=mybridge busybox
```

Des containers dans deux réseaux séparés ne peuvent communiquer


Exercices : 

* créer un autre réseau de type bridge
* lancer deux containers sur deux réseaux différents 
* ping chaque container depuis la machine host
* ping le container A depuis le container B


## Qu'est-ce qu'un volume ?


Modification de la page par défaut "nginx" avec un volume

```bash
docker run -d -it --name mynginx -v "$(pwd)"/nginx:/usr/share/nginx/html:ro  nginx:alpine
```

## Quelle commande utiliser pour se connecter à un container en cours d'éxécution ?

Se connecter à un container en cours d'execution 

```bash
docker exec  <container id or name>  ping google.com
```

## Comment lister les images ou containers ?

Lister que les noms des containers 

```bash
docker ps --format '{{.Names}}'
```

Arrêter une liste de containers 

```bash
docker ps --format '{{.Names}}' | xargs docker stop
```


## A retenir 

* docker est un runtime, il en existe d'autres (ex: podman)
* les images sont des emplilements de fichiers compressés
* privilégier un process par container
* limiter les ressources du container
* communication réseau
* partage des données possible via les volumes

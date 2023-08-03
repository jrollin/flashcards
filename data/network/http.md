---
id: network-http
title: HTTP
description: URL, TCP, http 1/2/3, HTTPS
topic: network
draft: false
tags:
---

## What's means HTTP ?

Hypertext Transport Protocol

## What happens when you type an URL to browser ?

* enter URL
* search `IP` in DNS in cache or `Recursive DNS Lookup
* browser establish `TCP connection` with server
* browser send `HTTP Request` to server
* server sends back `HTTP Response` 
* browser renders `HTTP content`


## How URL works ?

https://julienrollin.com:443/categories/talk?sort=asc#anchor

* scheme :  `https://`
* domain: `julienrollin.com`
* port : `:443`
* path:  `/categories/talk`
* query parameters:  `?sort=asc`
* fragment id:  `#anchor`


## HTTP Request ?

* domain 
* resource 
* method
* headers

GET 

```bash
GET /categories HTTP/1.1
Host: julienrollin.com
User-Agent: Mozilla
Cookie: ....
```

POST with Json Body

```bash
POST /articles HTTP/1.1
Host: julienrollin.com
Content-Type: application/json
Content-Length: 20

{"name": "Julien"}
```

## HTTP Response ?

* status code
* headers
* body

```bash
HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Content-Length: 20
Content-Type: text/plain; charset=UTF-8

whatever body in plain text
```


## HTTP 1.0 vs 1.1 vs 2.0 vs 3.0  ?

* HTTP 1.0: all requests requires separate TCP connection
* HTTP 1.1: can reuse connection, persistent connection
* HTTP 2.0: HTTP streams,  allow multiplexing differents HTTP exchanges on same TCP connection. Not sent in order.
* HTTP 3.0:  use QUIC instead of TCP. Based on UDP, no additional handshake


## How HTTPS works ?

Hypertext Transfer Protocol Secure (HTTPS) 

HTTPS transmits encrypted data using Transport Layer Security (TLS)

* client starts TCP connection
* client sends "hello" message with all informations necessary for encryption algorithm (cipher suite) and TLS supported. 
* server sends the SSL certificate to client
* client validates certificates 
* client generates session key and encrypt it with public key received
* server receives encrypt session key and can decrypt it with private key
* both client and server share same session key and can communicate in secure channel



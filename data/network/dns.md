---
id: network-dns
title: How DNS works ?
description: DNS servers, resolvers, nameservers, dig
topic: network
draft: false
tags:
---

## Describe the flow of communication when visiting a domain like  whatever.com ?

Browser -> Function -> Resolver -> Authoritative Nameservers

* `browser` uses DNS to look up IP addresses
* operationg system provides `function` to do DNS lookups
* function sens requests to a server called `resolver` which know where to find authoritative nameservers
* `authoritative nameservers` are servers where DNS records are stored

NB: There is DNS cache at every step

## What are the 3 levels of the authoritative DNS servers ?

example :  julienrollin.com

* `root` : delegates  to `.com nameserver` 
* `.com nameserver` : delegates to `julienrollin.com nameserver`
* `julienrollin.com` anwsers with IP for `julienrollin.com` 

List of root servers (very few) : https://root-servers.org/

## Which tool to list details of DNS ?

```bash
dig julienrollin.com
```

Only record

```bash
dig +short julienrollin.com
```

Show how domain is resolved begining at root server

```bash
dig +trace julienrollin.com
```


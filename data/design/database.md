---
id: design-database
title: Database
description: How to choose the right database ?
topic: design
draft: false
tags:
---

## CAP Theorem ?

Consider a distributed system, only 2 of 3 guarantees simultaneously

* `Consistency` : consistency means all clients see the same data at the same time no matter which node they connect to
* `Availability`: availability means any client which requests data gets a response even if some of the nodes are down.
* `Partition Tolerance`: a partition indicates a communication break between two nodes. Partition tolerance means the system continues to operate despite network partitions. 


## Relational vs Time-series vs NoSQL vs Columnar database ?


https://blog.bytebytego.com/p/understanding-database-types

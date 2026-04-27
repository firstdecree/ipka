---
concept: Load Balancing
lastUpdated: 2026-04-26
tags:
  - networking
  - scalability
  - infrastructure
categories:
  - Technology
  - Infrastructure
contributors:
  - NCryptsion
---

## Descriptions

<details>
<summary>NCryptsion</summary>

## Introduction to Load Balancing

Load balancing refers to the process of distributing network traffic across multiple servers. This ensures no single server bears too much demand, improving responsiveness and availability of applications.

## Types of Load Balancing
- **Layer 4 (L4):** Operates at the intermediate transport layer (TCP/UDP). It routes traffic based on IP address and port.
- **Layer 7 (L7):** Operates at the high-level application layer (HTTP/HTTPS). It can route traffic based on URL, headers, or cookies.

## Common Algorithms
1. **Round Robin:** Passes each new request to the next server in the line.
2. **Least Connections:** Sends requests to the server with the fewest active connections.
3. **IP Hash:** Uses a hash of the client's IP address to determine which server receives the request.
4. **Weighted Round Robin:** Similar to Round Robin but accounts for server capacity (processing power).

## Health Checks
Load balancers periodically check the "health" of backend servers. If a server is unresponsive, it is temporarily removed from the pool until it recovers.

## Implementation Example (Nginx)
```nginx
upstream myapp {
    server srv1.example.com;
    server srv2.example.com;
    server srv3.example.com;
}

server {
    listen 80;
    location / {
        proxy_pass http://myapp;
    }
}
```


</details>

## References
### Website
- [https://www.f5.com/glossary/load-balancer](https://www.f5.com/glossary/load-balancer)
- [https://www.digitalocean.com/community/tutorials/what-is-load-balancing](https://www.digitalocean.com/community/tutorials/what-is-load-balancing)


---
concept: Reverse Proxy
lastUpdated: 2026-04-26
tags:
  - networking
  - security
  - infrastructure
categories:
  - Technology
  - Networking
contributors:
  - NCryptsion
---

## descriptions

<details>
<summary>NCryptsion</summary>

## What is a Reverse Proxy?

A reverse proxy is a server that sits in front of web servers and forwards client (e.g. web browser) requests to those web servers. It acts as an intermediary, providing an additional layer of abstraction and control.

## Key Benefits
- **Security:** Hide the existence and characteristics of origin servers.
- **SSL Termination:** Handle SSL/TLS encryption/decryption to reduce load on backend servers.
- **Caching:** Cache static and dynamic content to improve performance.
- **Compression:** Compress outbound content to optimize bandwidth.

## Common Implementations
### 1. Nginx
The most popular choice for a reverse proxy due to its performance and simplicity.
```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 2. HAProxy
Known for high availability and load balancing capabilities.
```nginx
frontend http-in
    bind *:80
    default_backend servers

backend servers
    server server1 127.0.0.1:8080 maxconn 32
```

## Use Cases
- Protecting internal networks from direct internet access.
- Consolidating multiple services under a single domain.
- Implementing Web Application Firewalls (WAF).


</details>

## References
### Website
- [https://www.nginx.com/resources/glossary/reverse-proxy-server/](https://www.nginx.com/resources/glossary/reverse-proxy-server/)
- [https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/)


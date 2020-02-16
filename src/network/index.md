# 网络面试问题

## 2020/02/15

### 比较 HTTP/1.0 HTTP/1.1 HTTP/2

**HTTP/1.0:**

- 每一次请求都需要建立一个 TCP 连接，请求结束后立即断开连接
- 对于同一个 tcp 连接，所有的 http1.0 请求放入队列中，只有前一个请求的响应收到了，然后才能发送下一个请求，这个阻塞主要发生在客户端

**HTTP/1.1:**

- 每一个连接都默认是长连接(persistent connection)
- 对于同一个 tcp 连接，允许一次发送多个 http1.1 请求，也就是说，不必等前一个响应收到，就可以发送下一个请求
- 这样就解决了 http1.0 的客户端的队头阻塞，而这也就是 HTTP/1.1 中管道(Pipeline)的概念

但是 http1.1 规定，服务器端的响应的发送要根据请求被接收的顺序排队，也就是说，**先接收到的请求的响应也要先发送**

这样造成的问题是，如果最先收到的请求的处理时间长的话，响应生成也慢，就会阻塞已经生成了的响应的发送。也会造成队头阻塞。 可见，http1.1 的队首阻塞发生在服务器端。

**HTTP/2:**

为了解决 HTTP/1.1 中的服务端队首阻塞，HTTP/2 采用了**二进制分帧**(Binary framing) 和 **多路复用**(Multiplexing) 等方法。

二进制分帧中，帧是 HTTP/2 数据通信的最小单位

- 在 HTTP/1.1 数据包是文本格式，
- HTTP/2 的数据包是二进制格式的，也就是二进制帧
- 采用帧可以将请求和响应的数据分割得更小，且二进制协议可以更高效解析

**另外：**

- 在 HTTP/1.1 中，并发多个请求需要多个 TCP 链接，且单个域名有 6-8 个 TCP 链接请求限制
- 在 HTTP/2 中，同一域名下的所有通信在单个链接完成，仅占用一个 TCP 链接，且在这一个链接上可以并行请求和响应，互不干扰
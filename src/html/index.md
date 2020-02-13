# HTML 面经总结

## 2020/02/13

### 1. Post 和 Get 的区别

- 副作用: 指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的。
- 幂等: 指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态是否一致

在规范的应用场景上说，Get 多用于无副作用，幂等的场景，例如搜索关键字。Post 多用于副作用，不幂等的场景，例如注册。

- Get 请求能缓存，Post 不能
- Post 相对 Get 安全一点点，因为 Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会
- Post 可以通过 request body 来传输比 Get 更多的数据，Get 没有这个技术
- URL 有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
- Post 支持更多的编码类型且不对数据类型限制

### 2. HTTPS 和 HTTP 的区别

HTTPS 还是通过了 HTTP 来传输信息，但是信息通过 TLS 协议进行了加密。

TLS 协议位于传输层之上，应用层之下

在 TLS 中使用了两种加密技术，分别为：对称加密和非对称加密。

- 对称加密：对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密。
- 非对称加密：有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道

### 3. localStorage & sessionStorage 的区别

- Earlier, this was done with cookies.
- The storage limit is far larger (at least 5MB) than with cookies and its faster.
- The data is never transferred to the server and can only be used if the client specifically asks for it.

#### lifetime

- Data stored through localStorage is permanent: unless a web app deletes it or the user asks the browser to delete it
- sessionStorage has the same lifetime as the top-level window or browser tab

#### storage scope

- Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.
- sessionStorage is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate sessionStorage data.
- the same scripts from the same origin can't access each other's sessionStorage when opened in different tabs.

### 4. Difference of defer and async attributes on a `<script>` tag

- Neither of them is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing; Scripts are downloaded and executed in the order they are encountered.
- The defer attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a DOMContentLoaded event listener. defer scripts will execute in order.
- The async attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. async scripts will not necessarily execute in order.

#### Application scenario

- Placing a **defer** script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.

- If the scripts rely on each other, use **defer**.

- If the script is independent, use **async**.

- Use **defer** if the DOM must be ready and the contents are not placed within a DOMContentLoaded listener.

initSidebarItems({"enum":[["AccessControlAllowOrigin","Origins allowed to access"],["AllowCors","CORS response headers"],["DomainsValidation","Specifies if domains should be validated."],["RequestMiddlewareAction","Action undertaken by a middleware."],["RestApi","REST -> RPC converter state."]],"fn":[["cors_allow_headers","Returns the CORS AllowHeaders header that should be returned with that request."],["cors_allow_origin","Returns a CORS AllowOrigin header that should be returned with that request."],["is_host_allowed","Returns `true` if Host header in request matches a list of allowed hosts."]],"mod":[["cors","CORS handling utility functions"]],"struct":[["CloseHandle","Handle used to close the server. Can be cloned and passed around to different threads and be used to close a server that is `wait()`ing."],["Host","Host type"],["Origin","Request Origin"],["Response","Simple server response structure"],["Rpc","RPC Handler bundled with metadata extractor."],["Server","jsonrpc http server instance"],["ServerBuilder","Convenient JSON-RPC HTTP Server builder."],["ServerHandler","jsonrpc http request handler."],["SuspendableStream","`Incoming` is a stream of incoming sockets Polling the stream may return a temporary io::Error (for instance if we can't open the connection because of \"too many open files\" limit) we use for_each combinator which: 1. Runs for every Ok(socket) 2. Stops on the FIRST Err() So any temporary io::Error will cause the entire server to terminate. This wrapper type for tokio::Incoming stops accepting new connections for a specified amount of time once an io::Error is encountered"]],"trait":[["MetaExtractor","Extracts metadata from the HTTP request."],["RequestMiddleware","Allows to intercept request and handle it differently."]]});
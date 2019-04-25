export default context => {
  // Add the host property in the context (available in `asyncData` and `fetch`)
  context.host = process.server
    ? context.req.headers.host
    : window.location.host
}

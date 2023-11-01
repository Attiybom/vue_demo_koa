function logger() {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const end = Date.now();
    const ms = end - start;
    console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ms:${ms}`);
  };
}

module.exports = logger;

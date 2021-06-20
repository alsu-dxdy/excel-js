console.log(22)

async function start() {
  return await Promise.resolve('async working!!22')
}

start().then(console.log)

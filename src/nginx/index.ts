export default (name: string) => {
  const conf = `
server {
  listen  300;
  server_name    ${name};
  root /Users/qiuyongjin/workspace/yx-oa/dist;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
`
  console.log(conf)
}

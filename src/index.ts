import nginx from './nginx'

export default {
  command: [
    /*{
      cmd: 'test <test-value>',
      description: '测试配置命令 v2',
      option: [
        {
          flags: '-a,--all',
          description: 'option 描述',
          defaultValue: true
        }
      ],
      action: (testValue: string) => {
        console.log(testValue)
      }
    },*/
    {
      cmd: 'nginx <config-name>',
      description: '创建 nginx 配置文件',
      action: (configName: string) => nginx(configName)
    }
  ]
}

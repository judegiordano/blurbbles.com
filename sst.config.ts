// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='./.sst/platform/config.d.ts' />

const domain = 'blurbbles.com'

export default $config({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app(input) {
    return {
      name: 'blurbbles-web',
      removal: 'remove',
      home: 'aws',
    };
  },
  async run() {
    const { stage } = $app
    const environment = {
      STAGE: stage,
      LOG_LEVEL: process.env.LOG_LEVEL as string
    }

    const web = new sst.aws.Nextjs("blurbbles-nextjs", {
      domain: {
        name: domain,
        redirects: [`www.${domain}`]
      },
      environment
    });

    return {
      url: web.url
    }
  },
});

export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec10300123405e55402d4b0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-brmpbi4m',
                  apiId: '6b68546f-8e90-4206-974d-fa09a1bd5485'
                },
                {
                  buildHookId: '5ec1030068f9862dd801f9b0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zot261j1',
                  apiId: '681b18a3-8133-4854-9a8d-46d896647dd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/svagi/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-zot261j1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

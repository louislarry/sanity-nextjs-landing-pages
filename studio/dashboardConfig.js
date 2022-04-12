export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '625599e2051367142a59761c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gxoxq6w5',
                  apiId: 'f60657cf-cc33-4157-8e66-13955d21029c'
                },
                {
                  buildHookId: '625599e2175ad222c88750dd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oii47nr4',
                  apiId: '686c16b2-bd7e-49c1-9f1f-d7adbd761e4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/louislarry/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oii47nr4.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

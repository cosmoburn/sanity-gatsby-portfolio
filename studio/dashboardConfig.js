export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e458438bb3c79fd310575a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fabjymhg',
                  apiId: '047589a6-59c5-4748-a90c-f5537994e12e'
                },
                {
                  buildHookId: '5e4584393ca40f17d95f61bb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i7md2gjv',
                  apiId: '0601516d-19fe-456a-ae9b-4c00f56c84ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ArthurSilveira/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i7md2gjv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

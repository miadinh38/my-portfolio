export default {
  name: 'experiences',
  title: 'Exeperiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        { type: 'workExperience' }
      ]
    }
  ]
}
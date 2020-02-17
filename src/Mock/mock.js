export default [
  { 
    title: 'Tasks', 
    creatable: true,
    cards: [
      {
        id: 1,
        content: 'Study React Redux',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      },
      {
        id: 2,
        content: 'Create youtube content',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      },
      {
        id: 3,
        content: 'Build React Native App',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      },
      {
        id: 4,
        content: 'Improve english',
        labels: ['#54e1f7'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      },
    ]
  },
  { 
    title: 'Doing', 
    creatable: false,
    cards: [
      {
        id: 5,
        content: 'Deploy Portfolio',
        labels: ['#54e1f7'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      },
      {
        id: 6,
        content: 'Recreate Telegram clone',
        labels: [],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      }
    ]
  },
  { 
    title: 'Paused', 
    creatable: false,
    cards: [
      {
        id: 7,
        content: 'Take some vacations',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      },
      {
        id: 8,
        content: 'Buy a Car',
        labels: ['#54e1f7'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
      },
      {
        id: 9,
        content: 'Clean pc HD',
        labels: [],
      }
    ]
  },
  { 
    title: 'Done', 
    creatable: false,
    done: true,
    cards: [
      {
        id: 10,
        content: 'Study MirageJS',
        labels: ['#7159c1'],
      }
    ]
  },
];

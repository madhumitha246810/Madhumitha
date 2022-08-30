version=[
    c={
      'name':'version_3',
      'release_date':'22-09-2021',
      'bugs':'Skipping selector on buttons',
      'feature':'high resolution',
      'author':'devraj'
    },
    d={
      'name':'version_4',
      'release_date':'11-06-2022',
      'bugs':'Crash after tapping on button',
      'feature':'Improved Augmented Reality',
      'author':'siva'
    }
  ]
  console.table(version);
  arr=version.map(n=>n.release_date)
  console.log(arr);
    
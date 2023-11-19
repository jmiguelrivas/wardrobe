class Shot {
  constructor(name, size = {}, position = {}) {
    this.name = name
    this.position = position
    this.size = size
  }
}

export default [
  {
    id: 0,
    collection: 0,
    style: 'black-red',
    shots: [
      new Shot('front', { width: '250%' }, { top: '-190%', left: '-72%' }),
      new Shot('side', { width: '180%' }, { top: '-130%', left: '-50%' }),
    ],
  },
  // {
  //   collection: 0,
  //   style: 'grey-blue',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 2,
  //   style: 'army-green',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 2,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 2,
  //   style: 'mustard',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 2,
  //   style: 'blue',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 2,
  //   style: 'salmon',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 2,
  //   style: 'brown',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 3,
  //   style: 'earth',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 4,
  //   style: 'grey',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 4,
  //   style: 'wine',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 4,
  //   style: 'dark-green',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 4,
  //   style: 'white',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 4,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 5,
  //   style: 'grey',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 6,
  //   style: 'navy-white',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 6,
  //   style: 'blue-camo',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 7,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 8,
  //   style: 'black-blue',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 8,
  //   style: 'black-green',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 8,
  //   style: 'black-red',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 9,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 10,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 10,
  //   style: 'red',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 11,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 11,
  //   style: 'white',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 11,
  //   style: 'grey',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 12,
  //   style: 'black-orange',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 13,
  //   style: 'black-squares',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 13,
  //   style: 'red-squares',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 13,
  //   style: 'blue-squares',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 13,
  //   style: 'army-green-squares',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 14,
  //   style: 'blue-red-stripes',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 14,
  //   style: 'black-red-stripes',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 14,
  //   style: 'red-black-stripes',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 14,
  //   style: 'black-yellow-stripes',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 15,
  //   style: 'navy-grey',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 15,
  //   style: 'grey-navy',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 15,
  //   style: 'red-navy',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 15,
  //   style: 'navy-red',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 16,
  //   style: 'black-leather',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 16,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 16,
  //   style: 'white',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 17,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 17,
  //   style: 'navy',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 17,
  //   style: 'blue',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 17,
  //   style: 'army',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 18,
  //   style: 'black-gold',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
  // {
  //   collection: 19,
  //   style: 'black',
  //   shots: [
  //     new Shot('front', {width: "100%"}, { top: '10%', left: '10%' }),
  //     new Shot('side', {width: "100%"}, { top: '10%', left: '10%' }),
  //   ],
  // },
]

import './modules/alpinejs-3.min.js'
import collections from './db/collections.js'
import items from './db/items.js'

function getCollection(id) {
  return collections.find(collection => collection.id === id)
}

function getAttr(attr, obj) {
  const value = obj?.[attr]
  if (value) {
    return [attr, value].join(':')
  }
}

Alpine.store('selected', {
  default: [],
})

Alpine.store('db', {
  items: items.map(item => {
    const currentCollection = getCollection(item.collection)
    const description = currentCollection.description.join(', ')
    const brand = currentCollection.brand

    return {
      ...item,
      description,
      brand,
    }
  }),
})

Alpine.store('helpers', {
  getUrl: (item, shot) => {
    return [`img/${item.collection}`, item.style, `${shot.name}.jpg`].join('_')
  },
  getStyle: shot => {
    return [
      getAttr('width', shot?.size),
      getAttr('top', shot?.position),
      getAttr('bottom', shot?.position),
      getAttr('left', shot?.position),
      getAttr('right', shot?.position),
    ]
      .filter(e => e)
      .join(';')
  },
})

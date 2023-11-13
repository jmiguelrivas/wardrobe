import './modules/alpinejs-3.min.js'
import collections from './db/collections.js'
import items from './db/items.js'

function getCollection(id) {
  return collections.find(collection => collection.id === id)
}

Alpine.store('selected', {
  default: [],
})

Alpine.store('db', {
  items: items.map(item => {
    const currentCollection = getCollection(item.collection)
    const description = currentCollection.description.join(', ')
    const brand = currentCollection.brand

    const url = [
      `img/${item.collection}`,
      description
        .toLowerCase()
        .replace(/[\s/,]/g, '-')
        .replace(/(-)+/g, '-'),
      item.style,
      `${item.shoot}.jpg`,
    ].join('_')

    return {
      ...item,
      description,
      brand,
      url,
    }
  }),
})

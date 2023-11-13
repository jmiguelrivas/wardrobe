import "./modules/alpinejs-3.min.js";
import collections from "./db/collections.js";

Alpine.store('selected', {
    default: []
})

Alpine.store('db', {
    collections: collections
})
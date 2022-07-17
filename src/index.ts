import { handler } from "./handler"

addEventListener("fetch", (event) => {
  event.respondWith(handler(event.request))
})

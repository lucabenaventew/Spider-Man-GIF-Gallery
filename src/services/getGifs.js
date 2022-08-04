const apiKey = 'FCOBLcRqhdrP5K9v0uT4PZoCtpvjsf2u'

export default function getGifs({keyword}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = images.downsized_medium
        return {title, id, url}
      })
      return gifs
    })
}
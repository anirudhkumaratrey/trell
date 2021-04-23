export const getSearchs = () => fetch("http://localhost:4000/").then(res => res.json())

export const createSearch = (Search) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(Search)
})  

export const updateSearch = (Search, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(Search)
})  

export const getSearch = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())
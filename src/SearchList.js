import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getSearchs } from "./api"

export const SearchList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const Searchs = await getSearchs()
      setItems(Searchs)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Search List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(Search => (
                <tr key={Search._id}>
                  <td>
                    {Search.text}
                  </td>
                  <td>
                    <Link to={`/edit/${Search._id}`}>Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

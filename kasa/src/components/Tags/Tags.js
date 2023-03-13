import React from 'react'

export default function Tags(tags) {

// console.log(tags)

  return tags.tags.map((tag) => (
      <div key={tag} className="tag">
        {tag}
      </div>
    ))
}

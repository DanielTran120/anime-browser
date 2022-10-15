import React from 'react'

function AnimeCard({anime}) {
    
  return (
    
    <article className="anime-card">
        <a href="">
            <figure>
                <img 
                    src={anime.images.jpg.image_url}
                    alt="Anime img"/>
            </figure>
            <h3>
                {anime.title}
            </h3>
        </a>
    </article>
  )
}

export default AnimeCard
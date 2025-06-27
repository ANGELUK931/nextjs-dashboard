'use client';

import { useEffect, useState } from 'react';

interface PokemonData {
  name: string;
  types: string[];
  color: string;
  image: string;
}

interface DbzCharacter {
  name: string;
  race: string;
  ki: string;
  image: string;
}

interface AnimeInfo {
  title: string;
  rank: number;
  episodes: number;
  image: string;
}

interface GhibliFilm {
  title: string;
  director: string;
  running_time: string;
  image: string;
}

export function Apis() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [goku, setGoku] = useState<DbzCharacter | null>(null);
  const [toradora, setToradora] = useState<AnimeInfo | null>(null);
  const [totoro, setTotoro] = useState<GhibliFilm | null>(null);



  // PokéAPI
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res1 = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data1 = await res1.json();

        const res2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/pikachu');
        const data2 = await res2.json();

        console.log(' La Pokeapi funciona');

        setPokemon({
          name: data1.name,
          types: data1.types.map((t: any) => t.type.name),
          color: data2.color.name,
          image: data1.sprites.front_default,
        });
      } catch (error) {
        console.error(' Error en Pokeapi:', error);
      }
    };

    fetchPokemon();
  }, []);

  // Dragon Ball API
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch('https://dragonball-api.com/api/characters/1');
        const data = await res.json();

        console.log(' La api de Dragon Ball funciona');

        setGoku({
          name: data.name,
          race: data.race,
          ki: data.ki,
          image: data.image,
        });
      } catch (error) {
        console.error(' Error en la api de Dragon Ball:', error);
      }
    };

    fetchCharacter();
  }, []);

// Anime API
useEffect(() => {
  const fetchToradora = async () => {
    try {
      const res = await fetch('https://api.jikan.moe/v4/anime?q=Toradora&limit=1');
      const json = await res.json();
      const data = json.data[0];

      console.log(' La API de Jikan funciona');

      setToradora({
        title: data.title,
        rank: data.rank,
        episodes: data.episodes,
        image: data.images.jpg.image_url,
      });
    } catch (error) {
      console.error(' Error en la API de Jikan:', error);
    }
  };

  fetchToradora();
}, []);

useEffect(() => {
  const fetchTotoro = async () => {
    try {
      const res = await fetch('https://ghibliapi.vercel.app/films');
      const films = await res.json();

      const film = films.find((f: any) => f.title === 'My Neighbor Totoro');

      if (!film) throw new Error('Película "My Neighbor Totoro" no encontrada');

      console.log(' La api de Ghibli funciona');
      console.log(' Datos de Totoro:', film);

      setTotoro({
        title: film.title,
        director: film.director,
        running_time: film.running_time,
        image: film.image,
      });
    } catch (error) {
      console.error('Error en la api de Ghibli:', error);
    }
  };

  fetchTotoro();
}, []);


  return (
    <div className="mt-6 space-y-12">
      {/*PokéAPI*/}
      {pokemon ? (
        <div>
          <h2 className="mb-2 text-base font-semibold"> PokéAPI</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
            {[{ title: 'Nombre', content: pokemon.name },
              { title: 'Tipo', content: pokemon.types.join(', ') },
              { title: 'Color', content: pokemon.color },
              { title: 'Imagen', src: pokemon.image, isImage: true },
            ].map((card, idx) => (
              <div key={idx} className="rounded-xl bg-gray-50 p-2 shadow-sm">
                <div className="p-4 border-b">
                  <h2 className="text-sm font-medium">{card.title}</h2>
                </div>
                <div className="aspect-video overflow-hidden rounded-b-xl flex items-center justify-center">
                  {card.isImage ? (
                    <iframe
                      srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;">
                        <img src='${card.src}' style='max-height:100%;max-width:100%;' />
                      </body></html>`}
                      className="w-full h-full"
                      frameBorder="0"
                      title={card.title}
                    />
                  ) : (
                    <iframe
                      srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;font-family:sans-serif;">
                        <p>${card.content}</p>
                      </body></html>`}
                      className="w-full h-full"
                      frameBorder="0"
                      title={card.title}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm">Cargando datos</p>
      )}

      {/*Dragon Ball API */}
      {goku ? (
        <div>
          <h2 className="mb-2 text-base font-semibold">Dragon Ball API</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
            {[{ title: 'Nombre', content: goku.name },
              { title: 'Raza', content: goku.race },
              { title: 'KI', content: goku.ki },
              { title: 'Imagen', src: goku.image, isImage: true },
            ].map((card, idx) => (
              <div key={idx} className="rounded-xl bg-gray-50 p-2 shadow-sm">
                <div className="p-4 border-b">
                  <h2 className="text-sm font-medium">{card.title}</h2>
                </div>
                <div className="aspect-video overflow-hidden rounded-b-xl flex items-center justify-center">
                  {card.isImage ? (
                    <iframe
                      srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;">
                        <img src='${card.src}' style='max-height:100%;max-width:100%;' />
                      </body></html>`}
                      className="w-full h-full"
                      frameBorder="0"
                      title={card.title}
                    />
                  ) : (
                    <iframe
                      srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;font-family:sans-serif;">
                        <p>${card.content}</p>
                      </body></html>`}
                      className="w-full h-full"
                      frameBorder="0"
                      title={card.title}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm">Cargando datos</p>
      )}
      {/* Toradora API */}
{toradora ? (
  <div>
    <h2 className="mb-2 text-base font-semibold">Toradora Jikan</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
      {[{ title: 'Título', content: toradora.title },
        { title: 'Ranking', content: `#${toradora.rank}` },
        { title: 'Episodios', content: `${toradora.episodes}` },
        { title: 'Imagen', src: toradora.image, isImage: true },
      ].map((card, idx) => (
        <div key={idx} className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-sm font-medium">{card.title}</h2>
          </div>
          <div className="aspect-video overflow-hidden rounded-b-xl flex items-center justify-center">
            {card.isImage ? (
              <iframe
                srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;">
                  <img src='${card.src}' style='max-height:100%;max-width:100%;' />
                </body></html>`}
                className="w-full h-full"
                frameBorder="0"
                title={card.title}
              />
            ) : (
              <iframe
                srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;font-family:sans-serif;">
                  <p>${card.content}</p>
                </body></html>`}
                className="w-full h-full"
                frameBorder="0"
                title={card.title}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <p className="text-sm">Cargando datos de Toradora...</p>
)}
{/* Ghibli API - Totoro */}
{totoro ? (
  <div>
    <h2 className="mb-2 text-base font-semibold">Mi vecino Totoro</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
      {[{ title: 'Título', content: totoro.title },
        { title: 'Director', content: totoro.director },
        { title: 'Duración', content: `${totoro.running_time} min` },
        { title: 'Imagen', src: totoro.image, isImage: true },
      ].map((card, idx) => (
        <div key={idx} className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-sm font-medium">{card.title}</h2>
          </div>
          <div className="aspect-video overflow-hidden rounded-b-xl flex items-center justify-center">
            {card.isImage ? (
              <iframe
                srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;">
                  <img src='${card.src}' style='max-height:100%;max-width:100%;' />
                </body></html>`}
                className="w-full h-full"
                frameBorder="0"
                title={card.title}
              />
            ) : (
              <iframe
                srcDoc={`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;font-family:sans-serif;">
                  <p>${card.content}</p>
                </body></html>`}
                className="w-full h-full"
                frameBorder="0"
                title={card.title}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <p className="text-sm">Cargando datos de "Mi vecino Totoro"... </p>
)}
  </div>
  );
}


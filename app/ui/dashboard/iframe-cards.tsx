export function IframeCards() {
  const cards = [
    {
        title: 'Video del yutu', 
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        title: 'Ubicación maps',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.407345926186!2d-99.13320848464536!3d19.43260718688778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f0f1a5e2b%3A0xf89d2c4dbf314527!2sZ%C3%B3calo%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1718044042635!5m2!1ses-419!2smx',
    },
    {
        title: 'gugul',
        src: 'https://www.google.com/webhp?igu=1',
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
      {cards.map((card, idx) => (
        <div key={idx} className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-sm font-medium">{card.title}</h2>
          </div>
          <div className="aspect-video overflow-hidden rounded-b-xl">
            <iframe
              src={card.src}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              title={card.title}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}


function CardPopular() {

    const cards = [
        {
            url: '111.jpg',
            title: 'Tristique Magna',
            location: 'Italy'
        },
        {
            url: '/222.jpg',
            title: 'Egestas Quis',
            location: 'America'
        },
        {
            url: '/333.jpg',
            title: 'Ultricies Tristique',
            location: 'Indonesia'
        },
        {
            url: '/444.jpg',
            title: 'Diam Maecenas',
            location: 'Island'
        }
    ];

  return (
    <div className="flex justify-between items-center gap-7">
        {
        cards.map((card)=>(
            <div key={card.url} style={{backgroundImage: `url(${card.url})`}} className="bg-cover bg-center shadow-md shadow-cyan-600 w-75 h-[27rem] mb-25 rounded-lg transition duration-300 hover:scale-95">
                <div className="pt-[20rem] text-white cursor-pointer">
                    <h2 className="text-center text-2xl font-bold">{card.title}</h2>
                    <p className="flex justify-center items-center pt-5">
                        <span>
                            <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,79.693c16.964,0,30.765,13.953,30.765,31.104c0,17.151-13.801,31.104-30.765,31.104 c-16.964,0-30.765-13.953-30.765-31.104C117.735,93.646,131.536,79.693,148.5,79.693z"></path> </g></svg>
                        </span> 
                        <span className="ml-2 text-lg font-medium">{card.location}</span>
                    </p>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default CardPopular;

import Card from './Card'

function CardContainer() {
  const ads = [
    {
      id: 1,
      title: 'Chevrolet Cobalt 2022, holati a’lo',
      price: 125_000_000,
      currency: 'UZS',
      location: 'Toshkent shahri',
      condition: 'Ishlatilgan',
      isPremium: true,
      views: 248,
      image:
        'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'iPhone 14 Pro Max, 256 GB, original',
      price: 16_500_000,
      currency: 'UZS',
      location: 'Samarqand',
      condition: 'Yangi',
      isPremium: false,
      views: 512,
      image:
        'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Samsung 55" QLED televizor',
      price: 9_900_000,
      currency: 'UZS',
      location: 'Buxoro',
      condition: 'Yangi',
      isPremium: false,
      views: 181,
      image:
        'https://images.pexels.com/photos/8460153/pexels-photo-8460153.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Dell XPS 13 noutbuk, Intel i7, 16GB RAM',
      price: 14_800_000,
      currency: 'UZS',
      location: 'Farg‘ona',
      condition: 'Ishlatilgan',
      isPremium: true,
      views: 339,
      image:
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Uy jihozlari to‘plami — stol, stul, shkaf',
      price: 4_500_000,
      currency: 'UZS',
      location: 'Namangan',
      condition: 'Ishlatilgan',
      isPremium: false,
      views: 76,
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Yangi 2 xonali kvartira, Sergeli tumani',
      price: 640_000_000,
      currency: 'UZS',
      location: 'Toshkent, Sergeli',
      condition: 'Yangi',
      isPremium: true,
      views: 592,
      image:
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  return (
    <div className="my-8">
      <h1 className="mb-5 text-center text-lg font-bold md:text-2xl xl:text-3xl">
        Premium e'lonlar
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Card items go here */}
        {ads.map((item) => (
          <Card key={item.id} {...item} />
        ))}
        <Card
          title={'Web dasturchi'}
          price={'200000'}
          currency={'uzb'}
          location={'Samarqand'}
          condition={'Yangi'}
          isPremium={true}
          views={5}
        />
        
      </div>
    </div>
  )
}

export default CardContainer

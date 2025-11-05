export function GET(){
    const locations = [
  // Arena Sport (спортивні арени)
  { id: 1, name: "Arena Sport Sambir", category: "arena-sport", address: "вул. Мазепи 10, Самбір" },
  { id: 7, name: "Спортивний комплекс «Олімп»", category: "arena-sport", address: "вул. Б. Хмельницького 12 (ТЦ «Весна», 3-й поверх), Самбір" },
  { id: 8, name: "Фітнес центр Energy", category: "arena-sport", address: "пл. Ринок 8, Самбір" },
  { id: 9, name: "Тенісний корт Самбір", category: "arena-sport", address: "вул. Стрийська 25, Самбір" },

  // Billiard (більярдні)
  { id: 2, name: "Більярд Клуб", category: "billiard", address: "пл. Ринок 5, Самбір" },
  { id: 10, name: "Більярд Хаус", category: "billiard", address: "вул. Банова 12, Самбір" },
  { id: 11, name: "Кий & Куля", category: "billiard", address: "вул. Винниченка 7, Самбір" },

  // Center (центр міста)
  { id: 3, name: "Ратуша Самбора", category: "center", address: "пл. Ринок 1, Самбір" },
  { id: 12, name: "Собор Різдва Христового", category: "center", address: "вул. Соборна 3, Самбір" },
  { id: 13, name: "Музей Самбірщини", category: "center", address: "вул. Львівська 18, Самбір" },

  // Dragon Park (розважальні центри)
  { id: 4, name: "Dragon Park", category: "dragon-park", address: "вул. Франка 20, Самбір" },
  { id: 15, name: "Дитячий розважальний центр «Казка»", category: "dragon-park", address: "вул. Мазепи 5, Самбір" },
  { id: 16, name: "Боулінг клуб «Strike»", category: "dragon-park", address: "вул. Стецька 14, Самбір" },

  // Park (парки)
  { id: 5, name: "Міський парк культури та відпочинку", category: "park", address: "вул. Паркова 1, Самбір" },
  { id: 17, name: "Парк Шевченка", category: "park", address: "вул. Шевченка 50, Самбір" },
  { id: 18, name: "Дендропарк", category: "park", address: "вул. Лісова 8, Самбір" },

  // Restaurants (ресторани)
  { id: 6, name: "Ресторан Львів", category: "restaurants", address: "вул. Галицька 8, Самбір" },
  { id: 19, name: "Піцерія Челентано", category: "restaurants", address: "пл. Ринок 12, Самбір" },
  { id: 20, name: "Кафе «Старе місто»", category: "restaurants", address: "вул. Руська 6, Самбір" },
  { id: 21, name: "Ресторан «Галичина»", category: "restaurants", address: "вул. Грушевського 28, Самбір" },
  { id: 22, name: "Кав'ярня „Coffee Time“", category: "restaurants", address: "вул. Банова 3, Самбір" },
];

    return Response.json(locations);
}
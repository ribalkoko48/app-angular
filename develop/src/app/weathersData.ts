export interface Data {
    img:string | number;
    address:string;
    phone:number;
    weather:{
        title:string;
        icon:string;
        water:number;
        temperature:number;
    },
    social_info:{
        title:string;
        img:string;
        followers:number;
        following:number;
    },
    type:string;
}


export const DATA = [{
    img: 1,
    address: 'Россия, Сочи',
    phone: 7495243787,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 5,
        temperature: 18
    },
    social_info: {
        title: 'Чистый воздух ждут вас',
        img: 'b1',
        followers: 180,
        following: 150
    },
    type: 'Hotel'
}, {
    img: 2,
    address: 'Россия, Домбай',
    phone: 74912331287,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 0,
        temperature: -10
    },
    social_info: {
        title: 'Лыжный и борд',
        img: 'b2',
        followers: 200,
        following: 120
    },
    type: 'Hotel'
}, {
    img: 3,
    address: 'Греция, Крит, Амудара (Ираклион)',
    phone: 74952878787,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 20,
        temperature: 30
    },
    social_info: {
        title: 'Бронируйте прмо сейчас',
        img: 'b3',
        followers: 700,
        following: 600
    },
    type: 'Hotel'
}, {
    img: 4,
    address: 'Россия, п. Бобруйск',
    phone: 743242478787,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 12,
        temperature: 20
    },
    social_info: {
        title: 'Рыбалка на щуку',
        img: 'b4',
        followers: 20,
        following: 5
    },
    type: 'Fishing'
}, {
    img: 5,
    address: 'Россия, Владивосток',
    phone: 749512418787,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 5,
        temperature: 10
    },
    social_info: {
        title: 'Карасики сами в лодку',
        img: 'b5',
        followers: 5,
        following: 0
    },
    type: 'Fishing'
}, {
    img: 6,
    address: 'Россия, Волга',
    phone: 74952878787,
    weather: {
        title: 'Солнечно/Дождь',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 1,
        temperature: 0
    },
    social_info: {
        title: 'Карп и карась',
        img: 'b6',
        followers: 10,
        following: 9
    },
    type: 'Fishing'
}, {
    img: 7,
    address: 'Италия, Мадонна ди Кампильо',
    phone: 7495235787,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 18,
        temperature: 25
    },
    social_info: {
        title: 'Пицца',
        img: 'b7',
        followers: 500,
        following: 250
    },
    type: 'Tours'
}, {
    img: 8,
    address: 'Таиланд, Паттайя, Biblio Globus',
    phone: 74952878787,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 20,
        temperature: 35
    },
    social_info: {
        title: 'Слоны и крокодилы',
        img: 'b8',
        followers: 100,
        following: 99
    },
    type: 'Tours'
}, {
    img: 9,
    address: 'Вьетнам, Нячанг, Pegas Touristik',
    phone: 74952234787,
    weather: {
        title: 'Солнечно',
        icon: 'sunny', // sunny, rain, dull, snow
        water: 21,
        temperature: 40
    },
    social_info: {
        title: 'Кухня еще та!',
        img: 'b9',
        followers: 100,
        following: 1
    },
    type: 'Tours'
}, {
    img: 10,
    address: 'Россия, Москва',
    phone: 7495652787,
    weather: {
        title: 'Солнечно/пасмурно',
        icon: 'sunny',
        water: -10,
        temperature: 0
    },
    social_info: {
        title: 'Москва, звонят колокола',
        img: 'b10',
        followers: 4000000,
        following: 1
    },
    type: 'Weather'
}]
const baseURL = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;
const pngUrl = process.env.REACT_APP_PNG;

const _urls = {
    discover: '/discover',
    movie: '/movie',
    genre: '/genre',
    list: '/list',
    tv: '/tv',
    trending: '/trending',
    search:'/search',
    multi:'/multi',
    day:'/day',
    now_playing:'/now_playing',
    videos:'/videos',
    similar:'/similar',
    account:'/account',
    watchlist:'/watchlist',
    favorite:'/favorite',
    movies:'/movies',
    credits:'/credits',
    auth:{
        authentication:'/authentication',
        token:'/token',
        session:'/session',
        new:'/new',
        validate_with_login:'/validate_with_login'
    }
}

export {
    baseURL,
    token,
    pngUrl,
    _urls
}

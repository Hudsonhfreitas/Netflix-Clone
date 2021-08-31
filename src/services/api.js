const api_key = 'api_key=51b6dcd1a31dfc39ee5a71ce18475e95';
const base_url = 'https://api.themoviedb.org/3';
const language = '&language=pt-BR';

const basic_fetch = async (endpoint) => {
    const response = await fetch(`${base_url}${endpoint}${api_key}${language}`)
    let json = response.json();
    return json;
}

export default {
    getFilmes: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basic_fetch('/discover/tv?with_networks=213&')
            },
            {
                slug: 'recommended',
                title: 'Recomendados para você',
                items: await basic_fetch('/tv/popular?')
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                items: await basic_fetch('/tv/top_rated?')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basic_fetch('/discover/movie?with_genres=28&')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basic_fetch('/discover/movie?with_genres=35&')
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basic_fetch('/discover/movie?with_genres=27&')
            }
        ]
    }
}
const endpoint = "https://v3.football.api-sports.io"

export const _get = async (ruta: string) => {
    return await fetch(endpoint + ruta, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            'x-apisports-key': process.env.NX_SPORTS_API_KEY
        }
    })
}
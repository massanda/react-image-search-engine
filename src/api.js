import Axios from "axios"

const searchImages = async (term) => {
    const response = await Axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID u7CefVj8FfswAsA3C750LydGpmLpUkDfeg037WK4wq0"
        },
        params: {
            query: term
        }
    })

    console.log(response.data.results)
    return response.data.results
}

export default searchImages
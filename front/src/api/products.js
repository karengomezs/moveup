export const host = "http://localhost:8080/api"
export const apiUrl = `${host}/entrenador`

export async function getClasses() {

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
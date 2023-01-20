export async function loginApi(user, password) {

    try {
        const data = await fakeResponse(user, password)
        // const response = await fetch();
        // const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }

}

function fakeResponse(user, password) {

    const fakeUser = {
        user: {
            id: 1,
            name: "user",
            lastName: "fake",
        },
        token: "ksks",
    }

    return new Promise((resolve, reject) => {
        if (user === "admin@gmail.com" && password === "123") {
            resolve(fakeUser)
        }
        else {
            reject(new Error("invalid user or password"))
        }
    })
}
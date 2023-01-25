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
            name: "karen",
            lastName: "g",
        },
        token: "ksks"
    }

    return new Promise((resolve, reject) => {
        if (user === "admin@gmail.com" && password === "123456") {
            resolve(fakeUser)
        }
        else {
            reject(new Error("invalid user or password"))
        }
    })
}
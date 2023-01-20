export async function signApi(name, lastName, email, password) {
    try {
        const data = await fakeResponse(name, lastName, email, password)
        return data;
    } catch (error) {
        console.log(error);
    }
}

function fakeResponse(name, lastName, email, password) {
    const fakeUser = {
        user: {
            id: 1,
            name: "mariam",
            lastName: "s"
        },
        token: "msms"
    }

    return new Promise((resolve, reject) => {
        if (name === "m" && lastName === "m" && email === "m@gmail.com" && password === "123") {
            resolve(fakeUser)
        } else {
            reject(new Error("invalid data, please check it again"))
        }
    })
}


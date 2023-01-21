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
            name,
            lastName,
            email
        },
        token: "msms"
    }

    return Promise.resolve(fakeUser)

    // new Promise((resolve) => {
    //     resolve(fakeUser)
    // })
}


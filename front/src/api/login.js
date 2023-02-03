export async function loginApi(user, password) {
  try {
    const data = await fakeResponse(user, password);
    // const response = await fetch();
    // const data = await response.json()
    return data;
  } catch (error) {
    throw error;
  }
}

function fakeResponse(user, password) {
  const fakeUser = {
    user: {
      id: 1,
      name: "admin",
      lastName: "g",
      email: "admin@gmail.com",
    },
    token: "ksks",
  };

  return new Promise((resolve, reject) => {
    if (user === fakeUser.user.email && password === "123456") {
      resolve(fakeUser);
    } else {
      reject(
        new Error(
          "Por favor vuelva a intentarlo, sus credenciales son inválidas"
        )
      );
    }
  });
}

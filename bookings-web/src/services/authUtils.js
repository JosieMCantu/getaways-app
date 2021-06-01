export const registerUser = async (userName, password, email) => {
    const user = await fetch(`${process.env.BASE_URL}/users/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userName,
            password: password,
            email: email,
        })
    })
    
    return user;
}

export const loginUser = async () => {
    const user = await fetch(`${process.env.BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userName,
            password: password,
            email: email,
        })
    })
    return user;
}

export const editUser = async () => {
    const user = await fetch(`${process.env.BASE_URL}/users/logout`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userName,
            password: password,
            email: email,
        })
    })
    return user;
}
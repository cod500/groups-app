export const signUpUser = async (fullName, email, id) => {

    const response = await fetch('/sign-up', {
        method: 'post',
        body: JSON.stringify({ fullName, email, id }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response;
}
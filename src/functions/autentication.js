import data from "../data/MOCK_DATA.json"

const dataMock = data

export const login = (username, password) => {
    const user = dataMock.find(user => user.UserName === username)
    if (user && password === user.Password) {
        return true
    }
}
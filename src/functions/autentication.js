import data from "../data/MOCK_DATA.json"

const dataMock = data

export const login = (username, password) => {
    const user = dataMock.find(user => user.userName === username)
    if (user && password === user.password) {
        return true
    }
}
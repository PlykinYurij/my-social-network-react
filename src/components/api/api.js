import axios from "axios";

const instatnce = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "ceba739d-fec2-4628-a2d6-7dbbf5da51c9" }
})


export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instatnce.get(`users/?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instatnce.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id) {
        return instatnce.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instatnce.get(`profile/` + userId).then(response => response.data)
    },
    getStatus (userId) {
        return instatnce.get(`profile/status/` + userId).then(response => response.data)
    },

    updateStatus (status) {
        return instatnce.put (`profile/status`, {status: status}).then(response => response.data)
    }
}

export const headerAPI = {
    getAuthMe() {
        return instatnce.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instatnce.post (`auth/login`, {email, password, rememberMe})
    },
    loginOut () {
        return instatnce.delete (`auth/login`)
    }
}


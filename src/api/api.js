import axios from "axios";
import { unfollow } from "../redux/users-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "990af6b4-b7cf-4988-98f9-8d97d0c5574c",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollowdelete(id) {
    return instance.delete(`follow/${id}`);
  },

  followpost(id) {
    return instance.post(`follow/${id}`);
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please use profile api object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

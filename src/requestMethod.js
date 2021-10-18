import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjAyY2Y0NjY3M2U1YTZhNDdmOGJiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzcyMjY1OCwiZXhwIjoxNjMzOTgxODU4fQ.YQFjBjLrzmEAgnCktY0eiRmj208K3BGHFoVYVq1l6U4"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});
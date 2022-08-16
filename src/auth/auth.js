import { Cookies, removeCookie } from 'react-cookie'

const cookies = new Cookies();


export const setCookie = (name, value, options) => {
    const expires = new Date();

    // 년도 설정, 현재의 년도를 가져와 +10을 해서 2032가 됨
    expires.setFullYear(expires.getFullYear() + 10);
    출처: https://itprogramming119.tistory.com/entry/React-쿠키-값-시간-설정하는-방법 [코딩병원:티스토리]
    return cookies.set(name, value, { ...options })
}

export const getCookie = (name) => {
    return cookies.get(name)
}

export const deleteCookie = (name) => {
    removeCookie(name, { path: '/' })
}
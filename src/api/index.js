import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000',
});
api.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');


export const apis = {
	// user
	signUp: (data) => api.post('/user/signup', data),
	signIn: (data) => api.post('/user/login', data),
	signOut: () => api.post('/user/logout'),
	mypage: () => api.get('/api/mypage'),


	// post
	postList: () => api.get('/api/postList'),	
	postdetail: (post_id) => api.get(`/api/postdetail/${post_id}`),
	rankingList: () => api.get('/api/ranking'),
	updatePost: (postId, post_data, config) => api.put(`/api/post/${postId}`, post_data, config),
	createPost: (post_data, config) => api.post('/api/post', post_data, config),
	deletePost: (postId) => api.delete(`/api/post/${postId}`),

	// Doing
	createDoing: (postId, doing) => api.post(`/api/doing/${postId}`, doing),
	updateDoing: (doingId, doing) => api.put(`/api/doing/${doingId}`, doing),
	deleteDoing: (doingId) => api.delete(`/api/doing/${doingId}`)
};


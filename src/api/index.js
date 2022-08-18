import axios from 'axios';

const api = axios.create({
	baseURL: 'http://13.125.122.191:8080',
});
api.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');


export const apis = {
	// user
	signUp: (data) => api.post('/users/signup', data),
	signIn: (data) => api.post('/users/login', data),
	signOut: () => api.post('/users/logout'),
	mypage: () => api.get('/api/mypage'),


	// post
	postList: () => api.get('/api/boards'),	
	postdetail: (boardid) => api.get(`/api/boards/${boardid}`),
	//post_data = = {title: '', image: '', content: ''}
	updatePost: (boardid, post_data) => api.put(`/api/boards/${boardid}`, post_data),
	createPost: (post_data) => api.post('/api/boards/form', post_data),
	deletePost: (boardid) => api.delete(`/api/boards/${boardid}`),

	// Doing
	//doing_data = {content: ''}
	createDoing: (boardid, doing_data) => api.post(`/api/boards/${boardid}/posts`, doing_data),
	updateDoing: (boardid, doingId, doing_data) => api.put(`api/boards/${boardid}/posts/${doingId}`, doing_data),
	deleteDoing: (boardid, doingId) => api.delete(`api/boards/${boardid}/posts/${doingId}`)
};


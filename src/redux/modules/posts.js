// posts.js
import { apis } from "../../api/index";

const initialState = {
    post_list: [
        {
            id: '1',
            title: 'post example',
            doing: 'doing example',
        }
    ],
    doing_list: [
        { post_id: '1', id: '1', doing: 'doing example 1' },
        { post_id: '1', id: '2', doing: 'doing example 2' },
        { post_id: '1', id: '3', doing: 'doing example 3' },
        { post_id: '1', id: '4', doing: 'doing example 4' }
    ],
    current_post: {},
    current_doing: [],
};


// action types
const LOADPOSTS = 'posts/loadPosts';
const CREATEPOST = 'posts/createPost';
const READPOST = 'posts/readPost';
const UPDATEPOST = 'posts/updatePost';
const DELETEPOST = 'posts/deletePost';

const LOADDOING = 'doing/loadDoing';
const CREATEDOING = 'posts/createDoing';
const READDOING = 'posts/readDoing';
const UPDATEDOING = 'posts/updateDoing';
const DELETEDOING = 'posts/deleteDoing';


// action creators

// posts = [{}, {}, {}, ...]
export const loadPosts = (posts) => {
    return { type: LOADPOSTS, posts };
}

// post = {id='', title: '', doing: ''}
export const createPost = (post) => {
    return { type: CREATEPOST, post };
}

export const readPost = (post_id) => {
    return { type: READPOST, post_id };
}

// post = {title: '', doing: ''}
export const updatePost = (post_id, post) => {
    return { type: UPDATEPOST, post_id, post };
}

export const deletePost = (post_id) => {
    return { type: DELETEPOST, post_id };
}

// doing = [{}, {}, {}, ...]
export const loadDoing = (doing) => {
    return { type: LOADDOING, doing };
};

// doing = {post_id: '', doing: ''}
export const createDoing = (doing_id, doing) => {
    return { type: CREATEDOING, doing_id, doing };
}

export const readDoing = (post_id) => {
    return { type: READDOING, post_id };
}

// doing_content =  ''
export const updateDoing = (doing_id, doing_content) => {
    return { type: UPDATEDOING, doing_id, doing_content };
}

export const deleteDoing = (doing_id) => {
    return { type: DELETEDOING, doing_id };
}

//middleware actions
export const loadPostsListAxios = (mount) => { // 전체 게시글 리스트 불러오기
	return async (dispatch) => {
		if(mount){
		await apis.postList().then((res) => {
				console.log(res, 'main page posts list response')
				const post_list = res.data;
				dispatch(loadPosts(post_list));
			})
			.catch((err) => {
				console.error(err, 'main page posts list error');
				const alert = async () => {
					await window.alert(err.response.data);
					if(err.response.status === 400){
						window.location.href = '/';
					}
				}
				alert();
			});
		}
	};
};

export const loadPostAxios = (post_id) => { // 조회할 게시글 불러오기
	return async (dispatch) => {
		await apis.postdetail(post_id).then(
			res => { 
				console.log(res, 'detail page response')
				const post_data = res.data;
				dispatch(loadPosts(post_data));
			}
		).catch(
			err => {
				console.log(err, 'detail page error');
				const alert = async () => {
					await window.alert(err.response.data);
					if(err.response.status === 400){
						window.location.href = '/';
					}
				}
				alert();
			}
		)
	}
}
export const createDoingAxios = (post_id, doing) => {
	return async (dispatch, useState) => {
			apis.createDoing(post_id, {doing}).then(
					res => {
						console.log(res);
						const new_doing = {doing: doing, doingId: res.data.doingId, nickname: res.data.nickname, userId: res.data.userId, edit: false};
						dispatch(createDoing(new_doing));
					}
			).catch(
					err => {
						console.error(err);
						const alert = async () => {
							await window.alert(err.response.data);
							if(err.response.status === 400){
								window.location.href = '/';
							}
						}
						alert();
					}
			)
	}
}

	export const updateDoingAxios = (doing_id, doing) => {
		return async (dispatch, useState) => {
			apis.updateDoing(doing_id, {doing}).then(
				res => {
					console.log(res, 'updated doing res');
					const _doing = useState().post[0].comments;
					const new_doing = _doing.map(v=>{
						if(v.doingId === doing_id){
							v.doing = doing;
							return v;
						}
						return v;
					});
					dispatch(updateDoing(new_doing));
				}
			).catch(
				err => {
					console.error(err, 'updated doing error');
					const alert = async () => {
						await window.alert(err.response.data);
						if(err.response.status === 400){
							window.location.href = '/';
						}
					}
					alert();
				}
			)
		}
	}

	export const deleteDoingAxios = (doing_id) => {
		console.log(doing_id)
		return async (dispatch, useState) => {
			apis.deleteDoing(doing_id).then(
				res => {
					console.log(res);
					const _doing = useState().post[0].comments;
					const new_doing = _doing.filter(v=>v.doingId !== doing_id);
					dispatch(deleteDoing(new_doing));
				}
			).catch(
				err => {
					console.error(err);
					const alert = async () => {
						await window.alert(err.response.data);
						if(err.response.status === 400){
							window.location.href = '/';
						}
					}
					alert();
				}
			)
		}
	}



// reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOADPOSTS: {
            
            return { ...state, post_list: action.posts };
        }
        case CREATEPOST: {
            
            const new_post = { ...action.post };
            const new_post_list = [...state.post_list, new_post];
            return { ...state, post_list: new_post_list };
        }
        case READPOST: {
            
            const current_post = state.post_list.find((post) => post.id === action.post_id);
            return { ...state, current_post: current_post };
        }
        case UPDATEPOST: {
            
            const updated_post_list = state.post_list.map((post) => {
                if (post.id === action.post_id) {
                    return { ...post, title: action.post.title, doing: action.post.doing }
                } else {
                    return post;
                }
            })
            return { ...state, post_list: updated_post_list };
        }
        case DELETEPOST: {
            
            const new_post_list = state.post_list.filter((post) => post.id !== action.post_id);
            return { ...state, post_list: new_post_list };
        }

        case LOADDOING: {
            
            return { ...state, doing_list: action.doing };
        }
        case CREATEDOING: {
            
            const new_doing_list = [...state.doing_list,
            { id: action.doing_id, ...action.doing }]
            return { ...state, doing_list: new_doing_list };
        }
        case READDOING: {
            
            const current_doing = state.doing_list.filter((doing) => doing.post_id === action.post_id);
            return { ...state, current_doing: [...current_doing] };
        }
        case UPDATEDOING: {
            
            const new_doing_list = state.doing_list.map((doing) => {
                if (doing.id === action.doing_id) {
                    return { ...doing, doing: action.doing_content }
                } else {
                    return doing;
                }
            })
            return { ...state, doing_list: new_doing_list };
        }
        case DELETEDOING: {
            
            const new_doing_list = state.doing_list.filter((doing) => doing.id !== action.doing_id)
            return { ...state, doing_list: new_doing_list };
        }
        default: return state;
    }
}

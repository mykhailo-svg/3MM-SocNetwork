const profileReducer = (state, action) => {

    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            post_text: action.message,
            likes:0,
        };
        // console.log(this.profileData);
        

        
        Profile.Posts.unshift(newPost);
        this.rerenderEntireTree();
       
    
    }

    return state;
}
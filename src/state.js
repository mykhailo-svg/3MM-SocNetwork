// import rerenderEntireTree from "./render";

let state = {

    Messages:{

            Contacts:[

                {id:1,name:"Emily Johnson",online:""},
                {id:2,name:"Daniel Williams",online:"contact_online"},
                {id:2,name:"Daniel Williams",online:"contact_online"},
                {id:2,name:"Daniel Williams",online:"contact_online"},
                {id:2,name:"Daniel Williams",online:"contact_online"},
                {id:2,name:"Daniel Williams",online:"contact_online"},
                {id:3,name:"Olivia Brown",online:""},
                {id:4,name:"James Taylor",online:""}
            ],
            


    },

    Profile:{

        Posts:[
            {id: "1", post_text: "I just finished knitting a cozy sweater!", likes: 10, comments: 3, time: "10:30"},
            {id: "2", post_text: "Spent the afternoon painting a beautiful landscape.", likes: 5, comments: 2, time: "15:45"},
            {id: "3", post_text: "I scored a goal in today's soccer match!", likes: 15, comments: 6, time: "18:15"},
            {id: "4", post_text: "Experimented with a new recipe and baked a delicious cake.", likes: 8, comments: 1, time: "12:00"},
            {id: "5", post_text: "Took my dog for a long walk in the park. Such a fun day!", likes: 20, comments: 4, time: "09:00"}, 
        ],
        
        User:{
            Name: "My Name",
            Occupation: "Designer",
            Gender: "Male",
            Born: "June 26, 1980",
            Place: "2239 Hog Camp Road Schaumburg",
            Mail: "charles5182@ummoh.com",
            Phone: "33757005467"
        },

        Active:[
            {name: "John", time: "12:30", friend_state: "Busy"},
            {name: "Emily", time: "17:45", friend_state: "Online"},
            {name: "Michael", time: "09:15", friend_state: "Online"},
            {name: "Sarah", time: "14:00", friend_state: "Busy"},
            {name: "David", time: "19:20", friend_state: "Online"},
        ]


    }
    

 
}

let rerenderEntireTree = () => {
    
}


export const subscribe = (observer) => {
        rerenderEntireTree = observer;
}


export let addPost = (postMessage) => {
    
    let newPost = {
        id: 5,
        post_text:postMessage,
        likes:0,
    };
    state.Profile.Posts.push(newPost);
    rerenderEntireTree();

    

}


export default state;
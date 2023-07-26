
type TypePerson = {
    id: number
    name: string
    occupation: string
    follow: string,

    func: () => void;

}

let initialState = {
    People: [
        { id: 0, name: "People Name", occupation: "some occup", follow: "Follow" },
        { id: 1, name: "People Names", occupation: "some occup", follow: "Unfollow" }
    ] as Array<TypePerson>
}

export type TypePeopleInitialState = typeof initialState;

const peopleReducer = (state: TypePeopleInitialState = initialState, action: any): TypePeopleInitialState => {
    
    if (action.type === 'FOLLOW-USER') {
        return {
            ...state,
            People: state.People.map((user: TypePerson) => {
                if (user.id === action.id) {
                    return { ...user, follow: "Follow" }
                }
           
                
                console.log(user);
                
                return user;

            })
        }




    }
    else if (action.type === 'UNFOLLOW-USER') {

        return {
            ...state,
            People: state.People.map((user: TypePerson) => {
                if (user.id === action.id) {
                    return { ...user, follow: "UnFollow" }
                }
               
                return user;
            })
        }
    }
    else if (action.type === 'SET-USERS') {

        return {
            ...state,
            People: [...state.People,...action.users]
        }
    }


    else {
        return state;
    }


}

type TypeUserActionAC = {
    type: "FOLLOW-USER" | "UNFOLLOW-USER"
    id: number
}


export const followUSerAC = (userID: number): TypeUserActionAC => ({ type: "FOLLOW-USER", id: userID });
export const UnFollowUSerAC = (userID: number): TypeUserActionAC => ({ type: "UNFOLLOW-USER", id: userID });

export const SetUSersAC = (users: any): any => ({ type: "SET-USERS", users:users });





// type  typeAddPostActionCreatorr = {
//     type:'ADD-POST'
//     message:string
// }


// export const addPostActionCreator = (postMessage:string):typeAddPostActionCreatorr => {
//     debugger;
//     return { type: 'ADD-POST', message: postMessage }
// }

export default peopleReducer;
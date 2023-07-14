import { connect } from "react-redux";
import New_post from "./New_post";


// const New_post_container = (props) => {


//     let postsTextArea = React.createRef();


//     function newPost() {
//         // props.dispatch(addPostActionCreator(postsTextArea.current.value));
//         props.newPost(postsTextArea.current.value);
//         props.dialog_window();




//     }

//     return (









//             <div className="newp__container">
//                 <div className="newp__title">
//                     Add post
//                 </div>

//                 <div className='newp__content'>
//                     <div className="newp__main">
//                         <div className="newp__person">
//                             <div className="newp__avatar">
//                                 <img src={postAvatar} alt="" />
//                             </div>
//                             <div className="newp__person-info">
//                                 <div className="newp__person-name">Charles Deo</div>

//                             </div>
//                         </div>

//                         <textarea ref={postsTextArea} type="text" placeholder='What is in your mind?' className="newp__input" />
//                     </div>
//                     <div className="newp__add">
//                         <div className="newp__add-title">Add something...</div>
//                     </div>  

//                     <button onClick={newPost} className="newp__publish">Publish</button>
//                 </div>




//             </div>







//     )

// }



let mapStateToProps = (state) => {

    return {

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        newPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        }


    }


}



const New_post_container = () => {

    <New_post />

};


export default connect(mapStateToProps, mapDispatchToProps)(New_post);
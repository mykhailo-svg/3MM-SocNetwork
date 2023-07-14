

import React from 'react';
import postAvatar from '../../../img/avatar.jpg'
import './New_post.scss';
import { addPostActionCreator } from '../../../redux/profile-reducer';

const New_post = (props) => {

    
    let postsTextArea = React.createRef();

  
    function newPost() {
        // props.dispatch(addPostActionCreator(postsTextArea.current.value));
        props.newPost(postsTextArea.current.value);
        props.dialog_window();

        

       
    }

    return (

        

        
        

            


            <div className="newp__container">
                <div className="newp__title">
                    Add post
                </div>

                <div className='newp__content'>
                    <div className="newp__main">
                        <div className="newp__person">
                            <div className="newp__avatar">
                                <img src={postAvatar} alt="" />
                            </div>
                            <div className="newp__person-info">
                                <div className="newp__person-name">Charles Deo</div>
    
                            </div>
                        </div>
    
                        <textarea ref={postsTextArea} type="text" placeholder='What is in your mind?' className="newp__input" />
                    </div>
                    <div className="newp__add">
                        <div className="newp__add-title">Add something...</div>
                    </div>  

                    <button onClick={newPost} className="newp__publish">Publish</button>
                </div>




            </div>
        





        
    )
    
}
export default New_post;
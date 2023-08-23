import like_icon from '../../../../img/like.svg';
import comment_icon from '../../../../img/comment.svg';
import postAvatar from '../../../../img/avatar.jpg';
import React from 'react';


type TypeMyPostProps =  {
    time:string
    post_text:string
    likes:number
    comments:number
}


const MyPost:React.FC<TypeMyPostProps> = ({time,post_text,likes,comments}) => {
    return (
        <div className="post__item">
            <div className="post__person">
                <div className="post__avatar">

                    <img src={postAvatar} alt="" />
                </div>
                <div className="post__person-info ligth_pink">
                    <div className="post__person-name">Charles Deo</div>
                    <div className="post__preson-time">{time}</div>
                </div>
            </div>

            <div className="post__content">
                <div className="post__cover">
                    <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" alt="" className="post__cover-img" />
                </div>
                <div className="post__text ligth_pink">
                    <div className="post__author">Charles Deo </div>
                    <div className="post__article">{post_text}</div>
                </div>

            </div>


            <div className='post__data'>
                <div className="post__info-item post__likes-count ligth_pink">
                    <img src={like_icon} alt="" />
                    {likes}
                </div>
                <div className="post__info-item post__comments-count ligth_pink">
                    <img src={comment_icon} alt="" />
                    {comments}
                </div>
            </div>


        </div>


    )
}
export default MyPost;
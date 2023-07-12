import './Post.scss';

import postAvatar from '../../../img/avatar.jpg';

const Post = (props) => {
    return (
        <div className="posts__item">
            <div className="post__person">
                <div className="post__avatar">

                    <img src={postAvatar} alt="" />
                </div>
                <div className="post__person-info">
                    <div className="post__person-name">Charles Deo</div>
                    <div className="post__preson-time">{props.time}</div>
                </div>
            </div>

            <div className="post__content">
                <div className="post__cover">
                    <img src="" alt="" className="post__cover-img" />
                </div>
                <div className="post__text">
                    <div className="post__author">Charles Deo </div>
                    <div className="post__article">{props.post_text}</div>
                </div>

            </div>


            <div className='post__data'>
                <div className="post__info-item post__likes-count">
                    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M19.25 3.5c-2.03 0-3.9783.945-5.25 2.43833C12.7284 4.445 10.78 3.5 8.75004 3.5c-3.59333 0-6.41667 2.82333-6.41667 6.41667 0 4.41003 3.96667 8.00333 9.97503 13.46333L14 24.9083l1.6917-1.54c6.0083-5.4483 9.975-9.0416 9.975-13.45163C25.6667 6.32333 22.8434 3.5 19.25 3.5Zm-5.1333 18.1417L14 21.7583l-.1166-.1166c-5.55336-5.0284-9.21669-8.3534-9.21669-11.72503 0-2.33334 1.75-4.08334 4.08333-4.08334 1.79666 0 3.54666 1.155 4.16496 2.75334h2.1817c.6067-1.59834 2.3567-2.75334 4.1533-2.75334 2.3334 0 4.0834 1.75 4.0834 4.08334 0 3.37163-3.6634 6.69663-9.2167 11.72503Z" fill="#A303A0" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath></defs></svg>

                    {props.likes}
                </div>
                <div className="post__info-item post__comments-count">
                    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M23.3334 2.33331H4.66671c-1.28334 0-2.33334 1.05-2.33334 2.33334V25.6666L7.00004 21H23.3334c1.2833 0 2.3333-1.05 2.3333-2.3334V4.66665c0-1.28334-1.05-2.33334-2.3333-2.33334Zm0 16.33329H7.00004L4.66671 21V4.66665H23.3334V18.6666Z" fill="#A303A0" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath></defs></svg>

                    {props.comments}
                </div>
            </div>


        </div>


    )
}
export default Post;
import React from 'react';
import MyPost from './MyPost/MyPost';






type TypeMyPostsProps = {
    myPostsData: {
        id: number;
        post_text: string;
        likes: number;
        comments: number;
        time: string;
    }[]
}


const MyPosts: React.FC<TypeMyPostsProps> = ({ myPostsData }) => {








    let postsInfo = myPostsData;
    let postsComponents = postsInfo.map((post: any) => <MyPost time={post.time} post_text={post.post_text} likes={post.likes} comments={post.comments} />);



    return (



        <div className="posts">


            {postsComponents}

        </div>



    )
}
export default MyPosts;
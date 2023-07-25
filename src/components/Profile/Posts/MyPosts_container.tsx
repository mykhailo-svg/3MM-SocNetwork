import React from "react";

import MyPosts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state:any) => {

    return {
        myPostsData: state.Profile.Posts,
    }

}

let mapDispatchToProps = () => {
    return {

    }


}

const MyPosts_container = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPosts_container;
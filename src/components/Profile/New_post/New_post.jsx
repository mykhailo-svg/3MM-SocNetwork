import postAvatar from '../../../img/avatar.jpg'
import './New_post.css';
const New_post = (props) => {

    
    debugger;

    return (

        
        <div className="newp" ref={props.reff} >

            <div className="newp__zone" onClick={console.log("d")}>

            </div>


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
    
                        <textarea type="text" placeholder='What is in your mind?' className="newp__input" />
                    </div>
                    <div className="newp__add">
                        <div className="newp__add-title">Add something...</div>
                    </div>  

                    <button className="newp__publish">Publish</button>
                </div>




            </div>
        </div>





        
    )
    
}
export default New_post;
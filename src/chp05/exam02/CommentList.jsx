import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name:"잔망루피",
        comment:"뭘보노",
        url:"https://cdn.hddfs.com/files/dm/20231121/087b2fc6_202311211116319630.jpg?sf=webp&RS=750X902"
    },
    {
        name:"씨익루피",
        comment:"군침이 싹도노",
        url:"https://img.hankyung.com/photo/202503/01.39804548.1.png"
    },
    {
        name:"어쩔루피",
        comment:"내잘못임?",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXFKNkZXKdZ5QtS1hDEsPvQkQZzy7TBb9iQ&s"
    }
];

function CommentList(){
    return(
        <div>
            {
                comments.map((comment)=>{
                    return(
                        <Comment name = {comment.name} comment={comment.comment} url={comment.url}/>
                    );
                }
                )
            }
        </div>
    )
}

export default CommentList;
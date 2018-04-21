import { Comment } from "../post-comment/post-comment";

// export class BlogPost{
//     constructor(
//         public title:string,
//         public date: Date,
//         public content:string,
//         public comments:Array<string>=[]
//     ){}
// }

export class BlogPostNick{
    constructor(
        public title:string,
        public date: Date,
        public content:string,
        public comments:Array<Comment>
    ){}
}

// export class Comment{
//     constructor(
//         public nick:string,
//         public text:string,
//         public date:Date
//     ){}
// }
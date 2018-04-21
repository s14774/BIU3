import { Component } from "@angular/core";
import { 
    // BlogPost, 
    BlogPostNick,
    // Comment 
} from "./blog-post";
import { Comment } from "../post-comment/post-comment";

@Component({
    selector:'blog-post',
    templateUrl:'./blog-post.component.html'
})

export class BlogPostComponent{
    isInEditMode = false;

    // post = new BlogPost(
    //     "New Post",
    //     new Date(),
    //     "some content",
    //     ["comment 1", "comment 2"]
    // );

    c1 = new Comment("NickA1","CommentA1",new Date())
    postNick = new BlogPostNick(
        "New Post Nick",
        new Date(),
        "some content Nick",
        [this.c1]
    );

    consoleout() {
        console.log("Hello, world!");
    };

    toggleEditMode():void{
        this.isInEditMode=!this.isInEditMode;
    }
}
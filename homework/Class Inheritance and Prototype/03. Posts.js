function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let str = `${super.toString()}\nRating: ${this.likes-this.dislikes}`;
            if (this.comments.length > 0) {
                str += `\nComments:`;
                for (let comment of this.comments) {
                    str += `\n * ${comment}`;
                }
            }
            return str;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let p = new Post('title1', 'content1');
let m = new BlogPost('title2', 'content2', 0);

console.log(m.view());
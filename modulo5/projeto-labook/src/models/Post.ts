export interface IPostDB {
    content: string,
    token: string
}

export interface IPostToDelDB {
    token: string,
    post_id: string
}

export interface IPostLikeDB {
    post_id: string,
    user_id: string
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface IPostDB2 {
    id: string,
    content: string,
    user_id: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private user_id: string,
        private likes: number = 0
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.user_id
    }

    public getLikes = () => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.user_id = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}

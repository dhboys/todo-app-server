export declare class FeedResolver {
    getAllFeeds(): Promise<{
        feed_id: number;
        writer_nickname: string;
        writer_id: string;
        title: string;
        content: string;
        comment: {
            writer: string;
            password: string;
            content: string;
        }[];
    }[]>;
}

import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Feed')
export class FeedResolver {
  @Query()
  async getAllFeeds() {
    return [
      {
        feed_id: 1,
        writer_nickname: 'nick',
        writer_id: 'testId',
        title: 'testFeed',
        content: 'testContent, testContent, testContent, testContent, testContent, testContent',
        comment: [
          {
            writer: 'comment_writer',
            password: '123456',
            content: 'testComment, testComment, testComment, testComment, testComment, testComment',
          },
        ],
      },
    ];
  }
}

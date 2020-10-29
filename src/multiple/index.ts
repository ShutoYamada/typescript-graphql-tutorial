import {GraphQLServer} from 'graphql-yoga';
import { Chapter, ChapterParam } from '../types';

// GraphQL リクエスト内容に従って処理を実装
const resolvers = {
    Query: {
        chapters: (obj, args, context, info): Partial<Chapter>[] => {

            // (省略)DBアクセス処理...

            const mockDatas : Partial<Chapter>[] = [
                {
                    no: 2,
                    name: 'データ取得時にパラメータを指定する',
                    version: '1.0.0',
                    original: true,
                    postDate: '2020-10-29T12:00:00Z'
                },
                {
                    no: 3,
                    name: '複数のデータを扱う',
                    version: '1.0.0',
                    original: true,
                    postDate: '2020-10-29T12:00:00Z'
                }
            ];

            return mockDatas;
        },
        length: (obj, args, context, info): number => {
            return 2;
        }
    },
};

// GraphQLサーバ生成
const server = new GraphQLServer(
    {
        typeDefs: './src/multiple/test.graphql',
        resolvers,
    }
);

// サーバ起動
server.start(() => {
    console.log(`Server is running on http://localhost:4000`)
});
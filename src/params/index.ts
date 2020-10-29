import {GraphQLServer} from 'graphql-yoga';
import { Chapter, ChapterParam } from '../types';

// GraphQL リクエスト内容に従って処理を実装
const resolvers = {
    Query: {
        chapter: (obj, args : { param : ChapterParam }, context, info) => {

            let mockData: Partial<Chapter>;
            const paramNo: number = args?.param?.no;

            // (省略)DBアクセス処理...

            if(paramNo === 2){
                mockData = {
                    no: 2,
                    name: 'データ取得時にパラメータを指定する',
                    version: '1.0.0',
                    original: true,
                    postDate: '2020-10-29T12:00:00Z'
                };
            }

            return mockData;
        },
    },
};

// GraphQLサーバ生成
const server = new GraphQLServer(
    {
        typeDefs: './src/params/test.graphql',
        resolvers,
    }
);

// サーバ起動
server.start(() => {
    console.log(`Server is running on http://localhost:4000`)
});
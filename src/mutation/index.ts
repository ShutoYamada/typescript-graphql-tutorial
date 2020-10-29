import {GraphQLServer} from 'graphql-yoga';
import { Chapter, CreateParam, UpdateParam } from '../types';

// GraphQL リクエスト内容に従って処理を実装
const resolvers = {
    Query: {
        chapter: (obj, args, context, info): Partial<Chapter> => {

            // (省略)DBアクセス処理...

            const mockData: Partial<Chapter> = {
                no: 1,
                name: 'Queryを定義してデータの取得を行う',
                version: '1.0.0',
                original: true,
                postDate: '2020-10-29T12:00:00Z'
            };
            return mockData;
        },
    },
    Mutation: {
        create: (root, args : { param: CreateParam }): Chapter => {
            // (省略)引数を使ってDBに書き込み...
            const result: Chapter = {
                ...args?.param,
            };

            return result;
        },
        update: (root, args : { param: UpdateParam }): Chapter => {
            // (省略)引数を使ってDBに書き込み...
            const result: Chapter = {
                ...args?.param,
            };

            return result;
        }
    }
};

// GraphQLサーバ生成
const server = new GraphQLServer(
    {
        typeDefs: './src/mutation/test.graphql',
        resolvers,
    }
);

// サーバ起動
server.start(() => {
    console.log(`Server is running on http://localhost:4000`)
});

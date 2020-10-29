import {GraphQLServer} from 'graphql-yoga';
import { Chapter, CreateParam, UpdateParam, Result, Error } from '../types';

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
        create: (root, args : { param: CreateParam }): Result => {
            // (省略)引数を使ってDBに書き込み...
            let chapter: Chapter;
            let statusCode: number = 200;
            let error: Error[] = [];

            // No重複をチェック
            if(args?.param?.no < 5) {
                chapter = null;
                statusCode = 400;
                error.push({
                    value: 'Duplicate No.',
                    code: 1,
                })
            }
            else {
                chapter = {
                    ...args?.param,
                };
            }

            return {
                data: chapter,
                statusCode,
                error
            };
        },
        update: (root, args : { param: UpdateParam }): Result => {
            // (省略)引数を使ってDBに書き込み...
            let chapter: Chapter = {
                ...args?.param,
            };
            let statusCode: number = 200;
            let error: Error[] = [];

            return {
                data: chapter,
                statusCode,
                error
            };
        }
    }
};

// GraphQLサーバ生成
const server = new GraphQLServer(
    {
        typeDefs: './src/validation/test.graphql',
        resolvers,
    }
);

// サーバ起動
server.start(() => {
    console.log(`Server is running on http://localhost:4000`)
});

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let FeedResolver = class FeedResolver {
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
};
__decorate([
    (0, graphql_1.Query)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeedResolver.prototype, "getAllFeeds", null);
FeedResolver = __decorate([
    (0, graphql_1.Resolver)('Feed')
], FeedResolver);
exports.FeedResolver = FeedResolver;
//# sourceMappingURL=feed.resolver.js.map
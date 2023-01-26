import { PostDetailed, PostPaginated } from '../models/Post';

export default class PostService {
  static async getAllPosts({ page }: { page: number }): Promise<PostPaginated> {
    return {
      content: [
        {
          id: 1,
          title: 'Como aprender CSS e Javascript',
          slug: 'string',
          tags: ['javscript', 'css'],

          editor: { name: 'John Doe', avatarUrls: { small: '/avatar.jpeg' } },
          imageUrls: {
            medium: '/laptop.jpeg',
            small: '/laptop.jpeg',
            large: '/laptop.jpeg',
          },
          createdAt: new Date().toDateString(),
        },
        {
          id: 2,
          title: 'Como aprender Spring Boot',
          slug: 'string',
          tags: ['java', 'spring boot'],
          editor: { name: 'Joanne Doe', avatarUrls: { small: '/avatar.jpeg' } },
          imageUrls: {
            medium: '/laptop.jpeg',
            small: '/laptop.jpeg',
            large: '/laptop.jpeg',
          },
          createdAt: new Date().toDateString(),
        },
      ],
    };
  }

  static async getExistingPost(postId: number): Promise<PostDetailed> {
    return {
      id: 1,
      title: 'Como aprender CSS e Javascript',
      slug: 'string',
      tags: ['javascript', 'css'],
      body: 'texto em markdown aqui',
      editor: { name: 'John Doe', avatarUrls: { small: '/avatar.jpeg' } },
      imageUrls: {
        medium: '/laptop.jpeg',
        small: '/laptop.jpeg',
        large: '/laptop.jpeg',
      },
      createdAt: new Date().toDateString(),
    };
  }
}

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Markdown from '../../../components/Markdown';
import PostHeader from '../../../components/PostHeader';
import { PostDetailed } from '../../../core/models/Post';
import PostService from '../../../core/services/PostService';

export default function PostPage(props: PostProps) {
  const { post } = props;
  const pageTitle = `${post?.title} - Nome do Site`;
  return (
    <>
      <Head>
        {/* Open graph - pre visualizacao do site */}
        <meta property='og:title' content={post?.title} />
        <meta property='og:site_name' content='siteName' />
        <meta property='og:url' content='dnshere' />
        <meta property='og:description' content={post?.body.slice(0, 54)} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={post?.imageUrls.medium} />
        <title>{pageTitle}</title>
        <link
          rel='canonical'
          href={`http://localhost:3000/posts/${post?.id}/${post?.slug}`}
        />
      </Head>
      {post && (
        <PostHeader
          createdAt={post?.createdAt}
          editor={post?.editor}
          thumbnail={post?.imageUrls.large}
          title={post?.title}
        ></PostHeader>
      )}
      {post?.body && <Markdown>{post.body}</Markdown>}
    </>
  );
}

interface PostProps extends NextPageProps {
  post?: PostDetailed;
  host?: string;
}

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  Params
> = async ({ params, req }) => {
  try {
    if (!params) return { notFound: true };

    const { id } = params;
    const postId = Number(id);

    if (isNaN(postId)) return { notFound: true };

    const post = await PostService.getExistingPost(postId);

    return {
      props: { post, host: req.headers.host },
    };
  } catch (error: any) {
    return {
      props: {
        error: {
          message: error.message,
          statusCode: error.data?.status || 500,
        },
      },
    };
  }
};

import { GetServerSidePropsContext, PreviewData } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { ParsedUrlQuery } from "querystring";

type Post = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};
export default function PostId({
  post,
  postId,
}: {
  post: Post[];
  postId: String;
}) {
  return (
    <>
      <h1>Detail Post - {postId}</h1>
      <h3>Title: {post?.[0].title}</h3>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params }: Params = context;
  const { postId } = params;

  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos?id=${postId}`
  );
  const data: Post = await reponse.json();
  return {
    props: {
      post: data,
      postId,
    },
  };
}

import useSWR from "swr";
import Link from "next/link";
import axios from "axios";

export default function Post() {
  //fetch data with useSWR for client side == useEffect
  const fetchData = async () => {
    const reponse = await fetch("/api/posts");
    const data: any = await reponse.json();
    return data;
  };
  const { data, error } = useSWR("posts", fetchData);
  // if (typeof window === "object")
  console.log("fe", data);
  if (error) return <div>Có lỗi xảy ra</div>;
  if (!data) return <div>Đang tải...</div>;
  return (
    <>
      <h1>Hello NextJS</h1>
      <ol>
        {data.map((data: any) => {
          return (
            <li key={data.id}>
              <Link href={`/post/${data.id}`}>{data.title}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}

//fecth data with getServerSideProps
export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}


// import { INews } from "@/types/NewsTypes";

// import Newsone from "@/components/News/Newsone";

// export const revalidate = 60;
// export const dynamicParams = true;

// export async function generateStaticParams() {
//   const posts: INews[] = await fetch('https://news-api-next-js-main.vercel.app/api/news').then((res) =>
//     res.json()
//   );

//   return posts.slice(0, 5).map((post) => ({
//     id: post._id.toString(),
//   }));
// }
// type Params = Promise<{ id: string }>;

// export  async function NewsDetailsPage ({ params }: { params: Params}) {
//   try {
//     const  id  = (await params).id;
//     const response = await fetch(`https://news-api-next-js-main.vercel.app/api/news/${id}`, {
//       next: { revalidate: 60 },
//     });

//     if (response.status === 404) {
//       return <p className="text-center text-gray-500">News article not found.</p>;
//     }

//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.statusText}`);
//     }

//     const post = await response.json();

//     return (
//       // <section className="py-12">
//       //   <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
//       //     {post?.imageUrl && (
//       //       <div>
//       //         <Image
//       //           src={post?.imageUrl}
//       //           alt={post?.title || "News Image"}
//       //           width={800}
//       //           height={450}
//       //           className="rounded-md object-cover"
//       //         />
//       //       </div>
//       //     )}
//       //     <div className="my-5">
//       //       <h2 className="text-3xl font-bold mb-4">{post?.title ?? "Untitled News"}</h2>
//       //       <div className="flex justify-between items-center text-sm mb-4">
//       //         <p>{post?.published_at ? new Date(post.published_at).toLocaleDateString() : "Unknown Date"}</p>
//       //         <p>Source: <span>{post?.source ?? "Unknown"}</span></p>
//       //       </div>
//       //     </div>
//       //     <div className="mb-4">
//       //       {post?.categories?.length > 0 ? (
//       //         post.categories.map((category: string) => (
//       //           <span key={category} className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
//       //             {category}
//       //           </span>
//       //         ))
//       //       ) : (
//       //         <span className="text-gray-500">No categories</span>
//       //       )}
//       //     </div>
//       //     <p className="mb-2">{post?.snippet ?? "No summary available."}</p>
//       //     <p className="mb-4">{post?.description ?? "No description provided."}</p>
//       //   </article>
//       // </section>
//       <div>
//         <Newsone post={post} />
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <p className="text-center text-red-500">Failed to load news details.</p>;
//   }
// };

// export default NewsDetailsPage;

import React from 'react'

const pageId = () => {
  return (
    <div>page</div>
  )
}

export default pageId
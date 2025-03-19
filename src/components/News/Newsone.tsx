import Image from 'next/image';
import React from 'react';

interface IPost {
  imageUrl: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
}

const Newsone = ({ post }: { post: IPost }) => {
  return (
    <div>
      <section className="py-12">
        <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
          {post?.imageUrl && (
            <div>
              <Image
                src={post?.imageUrl}
                alt={post?.title || "News Image"}
                width={800}
                height={450}
                className="rounded-md object-cover"
              />
            </div>
          )}
          <div className="my-5">
            <h2 className="text-3xl font-bold mb-4">{post?.title ?? "Untitled News"}</h2>
            <div className="flex justify-between items-center text-sm mb-4">
              <p>{post?.published_at ? new Date(post.published_at).toLocaleDateString() : "Unknown Date"}</p>
              <p>
                Source: <span>{post?.source ?? "Unknown"}</span>
              </p>
            </div>
          </div>
          <div className="mb-4">
            {post?.categories?.length > 0 ? (
              post.categories.map((category: string) => (
                <span
                  key={category}
                  className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {category}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No categories</span>
            )}
          </div>
          <p className="mb-2">{post?.snippet ?? "No summary available."}</p>
          <p className="mb-4">{post?.description ?? "No description provided."}</p>
        </article>
      </section>
    </div>
  );
};

export default Newsone;
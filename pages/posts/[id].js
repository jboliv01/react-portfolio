import Link from 'next/link';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const Post = ({ htmlString, data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className='bg-gray-900'>
    <div>
    <nav className="bg-gray-900 px-10 pt-10 shadow-md">
        <div className="container justify-left max-w-screen-phone text-white rounded-md p-2 bg-gradient-to-b from-teal-600 to-teal-700 hover:from-slate-400 hover:to-slate-500 ">
          <Link href="/" className="text-xl font-semibold rounded-xl px-4 py-2">
            ← Back to Home
          </Link>
        </div>
      </nav>
      <article className="prose-xl dark:prose-invert mx-auto p-10 text-white bg-gray-900">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-4 font-semibold">{data.date}</p>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </article>
    </div>
    </main>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');

  const paths = files.map((filename) => ({
    params: {
      id: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const markdownWithMetadata = fs.readFileSync(path.join('posts', id + '.md')).toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content, { headerIds: false });

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;

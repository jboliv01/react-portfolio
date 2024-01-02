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
    <div>
    <nav className="bg-white p-4 shadow-md">
        <div className="containerjustify-left">
          <Link href="/" className="text-blue-600">
            ← Back to Home
          </Link>
        </div>
      </nav>
      <article className="prose-xl dark:prose-invert mx-auto p-5">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.date}</p>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </article>
    </div>
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

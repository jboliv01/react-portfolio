import Link from 'next/link';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import { CiClock1 } from "react-icons/ci";
import { formatDate } from '/lib/utils.js';


const Post = ({ htmlString, data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className='mx-auto max-w-7xl'>
  <div>
    <nav className="px-10 pt-10 shadow-md mx-auto">
      <div className="container justify-left max-w-screen-phone text rounded-md text-white hover:text-teal-400">
        <Link href="/" className="text-xl font-semibold underline rounded-xl px-4 py-2">
          ← Back to Home
        </Link>
      </div>
    </nav>
    <article className="prose-xl dark:prose-invert mx-auto p-10 text-white">
      <h1 className="text-5xl font-bold mb-0 text-teal-600">{data.title}</h1>
      <div className='flex items-center'>
        <CiClock1 className='text-xl text-white' />
        <p className='pl-2 text-gray-100 text-xl font-sans'>{formatDate(data.date)}</p>
      </div>
      <div className='flex items-center'>
        <Image src="/portrait_cropped.png" width='80' height='80' className='rounded-full'/>
        <div className="text-2xl ml-4 font-bold">{data.author.name}</div>
      </div>
      <div className="break-words"  dangerouslySetInnerHTML={{ __html: htmlString }} />
    </article>
  </div>
</main>

  );
};

export const getStaticPaths = async () => {
  // Read all files in the 'posts' directory
  const files = fs.readdirSync('posts');

  // Map each file to a path object with the base name as the id
  const paths = files.map((filename) => {
    // Remove the file extension for the id
    const id = filename.replace(/\.mdx?$/, '').replace(/\.html$/, '');
    return {
      params: { id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async ({ params: { id } }) => {
  // Determine the file extension
  const markdownFilePath = path.join('posts', id + '.md');
  const htmlFilePath = path.join('posts', id + '.html');
  let fileContent, isMarkdown;

  // Check if the Markdown file exists
  if (fs.existsSync(markdownFilePath)) {
    fileContent = fs.readFileSync(markdownFilePath).toString();
    isMarkdown = true;
  } else if (fs.existsSync(htmlFilePath)) {
    // If not, check if the HTML file exists
    fileContent = fs.readFileSync(htmlFilePath).toString();
    isMarkdown = false;
  } else {
    // Handle the case where neither file exists
    return {
      notFound: true,
    };
  }

  let htmlString;
  const parsedContent = matter(fileContent);

  // Parse the content based on the file type
  if (isMarkdown) {
    htmlString = marked(parsedContent.content, { headerIds: false });
  } else {
    htmlString = parsedContent.content; // The content is already HTML
  }

  return {
    props: {
      htmlString,
      data: parsedContent.data,
    },
  };
};


export default Post;

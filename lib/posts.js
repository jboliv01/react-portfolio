import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { html } from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
  // Dynamically import the strip-markdown module
  const stripMarkdown = (await import('strip-markdown')).default;

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Extract the first 150 characters of the markdown content as a snippet
    const snippetMarkdown = matterResult.content.split('\n').slice(1).join(' ').substring(0, 150);
    const processedSnippet = await remark().use(stripMarkdown).process(snippetMarkdown);
    const snippet = processedSnippet.toString().trim().replace(/\n/g, ' ') + '...';

    // Combine the data with the id, contentHtml, and snippet
    return {
      id,
      contentHtml,
      snippet,
      ...matterResult.data
    };
  }));

  // Sort posts by date
  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const lessonsDirectory = path.join(process.cwd(), "lessons");

// get all file names under lessons
const fileNames = fs.readdirSync(lessonsDirectory);

export function getSortedLessonsData() {
  const allLessonsData = fileNames.map((fileName) => {
    // remove all 'md' from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // read markdown file as string
    const fullPath = path.join(lessonsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  return allLessonsData;
}

export function getAllLessonsIds() {
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getLessonData(id) {
  const fullPath = path.join(lessonsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

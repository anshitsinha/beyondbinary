import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filepath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filepath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));

    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
}


export function formatDate(date: string, includeRelative = false) {
    let currentDate = new Date();
    if (!date.includes("T")) {
      date = `${date}T00:00:00`;
    }
  
    let targetDate = new Date(date);
  
    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    let daysAgo = currentDate.getDate() - targetDate.getDate();
  
    let formattedDate = "";
  
    if (yearsAgo > 0) {
      formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
      formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
      formattedDate = `${daysAgo}d ago`;
    } else {
      formattedDate = "Today";
    }
  
    let fullDate = targetDate.toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  
    if (!includeRelative) {
      return fullDate;
    }
  
    return `${fullDate} (${formattedDate})`;
  }
import fs from "fs";
import path from "path";
// import { promises as dns } from "dns";
import matter from "gray-matter";
// // get all the mdx files from the dir
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
// Read data from those files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}
// present the mdx data and metadata
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
export function getTermsOfServices() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "terms-of-services")
  );
}
export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), "src", "app", "privacy-policy"));
}

export function formatDate(date: string, includeRelative = false) {
  if (!date) {
    console.error("Invalid date value:", date);
    throw new Error("Invalid date value provided.");
  }

  // Check if date is a valid string
  if (typeof date !== 'string') {
    console.error("Expected a string for 'date', but got:", typeof date, date);
    throw new Error("The 'date' parameter must be a string.");
  }

  let currentDate = new Date();

  // Check if 'date' includes 'T', and if not, format it properly
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


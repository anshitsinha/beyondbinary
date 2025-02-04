import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  return (
    <Breadcrumb >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-xs md:text-base " href="/">home</BreadcrumbLink>
         
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-xs md:text-base " href={`/blog/${category}`}>{category}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xs md:text-base ">{slug}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/writing"));
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), "content/writing", `${resolvedParams.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return {};
  }
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);
  
  return {
    title: `${data.title} | Writing | Aryan Arora`,
    description: data.description || `Read ${data.title} by Aryan Arora`,
  };
}

export default async function WritingArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), "content/writing", `${resolvedParams.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  return (
    <article className="py-24 lg:py-32">
      <Section className="max-w-3xl">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to all writing
        </Link>
        
        <header className="mb-12 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-mono text-slate-500">{data.date}</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
              {data.category}
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            {data.title}
          </h1>
        </header>
        
        <div className="prose prose-invert prose-slate max-w-none prose-headings:font-display prose-headings:text-white prose-a:text-cyanGlow hover:prose-a:text-cyan-300 prose-img:rounded-2xl">
          <MDXRemote source={content} />
        </div>
      </Section>
    </article>
  );
}

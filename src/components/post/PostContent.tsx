import { IPost } from '@/types/post';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/esm/styles/prism/nord';
import remarkGfm from 'remark-gfm';
import PostStats from '../home/PostStats';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

interface PostContentProps {
  data: IPost;
}

export default function PostContent({ data }: PostContentProps) {
  console.log(data);
  return (
    <div className="max-w-3xl">
      <h1 className="mb-2 text-2xl font-bold">{data.title}</h1>
      <div className="mb-4 flex">
        <img
          src={data?.user.image as string}
          alt="user profile"
          className="mr-3 h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{data?.user.name}</span>
          <span className="text-sm text-gray-400">{data?.user.tagName}</span>
        </div>
      </div>
      <div className="">
        <article className="mb-4 h-[50vh]">
          <div>
            {!data.image ? (
              <div></div>
            ) : (
              <div className="flex justify-center">
                <Image
                  src={data.image}
                  alt="Preview"
                  width={300}
                  height={300}
                  className="flex h-auto w-full max-w-[300px]"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )}
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || '');
                const codeContent = String(children || '').trim();

                if (!codeContent) return null;

                return match ? (
                  <SyntaxHighlighter
                    style={nord}
                    language={match[1]}
                    PreTag="div"
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                ) : (
                  <SyntaxHighlighter
                    style={nord}
                    language="textile"
                    PreTag="div"
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                );
              },
              blockquote({ children, ...props }) {
                return (
                  <blockquote
                    style={{
                      background: '#7afca19b',
                      padding: '1px 15px',
                      borderRadius: '10px',
                    }}
                    {...props}
                  >
                    {children}
                  </blockquote>
                );
              },
            }}
          >
            {data?.content || ''}
          </ReactMarkdown>
        </article>
        <hr className="mb-4" />
        <PostStats statCount={data._count} userId={data.userId} />
      </div>
    </div>
  );
}

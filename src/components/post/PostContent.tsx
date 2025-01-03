import { IPost } from '@/types/post';
import PostStats from '../home/PostStats';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface PostContentProps {
  data: IPost;
}

export default function PostContent({ data }: PostContentProps) {
  console.log(data);
  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center">
        <img
          src={data?.user.image as string}
          className="mr-3 h-10 w-10 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{data?.title}</h2>
          <p className="text-sm text-gray-400">{data?.user.name}</p>
        </div>
      </div>
      <div className="">
        <article className="mb-4 h-[50vh]">
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

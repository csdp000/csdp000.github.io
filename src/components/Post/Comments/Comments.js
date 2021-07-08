import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';

export interface IUtterancesProps {
  repo: string;
  theme: string;
}

const Comments: React.FC<IUtterancesProps> = React.memo(({ repo, theme }) => {
  const containerRef = createRef<HTMLDivElement>("");

  useLayoutEffect(() => {
    const comments = document.createElement('script');

    const attributes = {
      src,
      repo,
      theme,
      'issue-term': 'pathname',
      label: '✨💬 comments ✨',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      comments.setAttribute(key, value);
    });

    containerRef.current.appendChild(comments);
  }, [repo]);

  return <div ref={containerRef} />;
});

Comments.displayName = 'Comments';

export default Comments;
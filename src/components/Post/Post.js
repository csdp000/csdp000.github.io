// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Utterances from './Utterances';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

let isDarkModeOn;
let bodyEl;


//to-do: 다크모드 중복코드 해결하기 (새로고침 하면 다크모드가 풀림) 
if (typeof window !== "undefined" && typeof document !== "undefined") {
  //다크모드 기본 값
  const storage = window.localStorage;
  bodyEl = document.getElementsByTagName('body')[0];  
  
  if(storage.getItem('darkMode') === null){
    storage.setItem('darkMode', "1");
  }  
  
  isDarkModeOn = storage.getItem('darkMode');

  if(isDarkModeOn == "1"){ 
    bodyEl.classList.add('dark');   
  }
}
const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">전체 글 보기</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}> 
        <Utterances repo='csdp000/csdp000.github.io' theme='github-light' />
      </div>
    </div>
  );
};

export default Post;

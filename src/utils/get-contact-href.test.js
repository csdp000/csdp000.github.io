// @flow strict
import getContactHref from './get-contact-href';

test('getContactHref', () => { 
  expect(getContactHref('github', '#')).toBe('https://github.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('vkontakte', '#')).toBe('https://vk.com/#'); 
  expect(getContactHref('rss', '#')).toBe('#'); 
  expect(getContactHref('instagram', '#')).toBe('https://www.instagram.com/#');
  expect(getContactHref('line', '#')).toBe('line://ti/p/#'); 
  expect(getContactHref('gitlab', '#')).toBe('https://www.gitlab.com/#');
  expect(getContactHref('weibo', '#')).toBe('https://www.weibo.com/#');
  expect(getContactHref('codepen', '#')).toBe('https://www.codepen.io/#');
  expect(getContactHref('youtube', '#')).toBe('https://www.youtube.com/channel/#');
  expect(getContactHref('soundcloud', '#')).toBe('https://soundcloud.com/#');
  expect(getContactHref('medium', '#')).toBe('https://medium.com/#');
});

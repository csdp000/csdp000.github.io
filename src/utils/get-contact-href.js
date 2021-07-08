// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break; 
    case 'email':
      href = `mailto:${contact}`;
      break; 
    case 'instagram':
      href = `https://www.instagram.com/${contact}`;
      break;
    case 'line':
      href = `line://ti/p/${contact}`;
      break; 
    case 'gitlab':
      href = `https://www.gitlab.com/${contact}`;
      break;
    case 'weibo':
      href = `https://www.weibo.com/${contact}`;
      break;
    case 'codepen':
      href = `https://www.codepen.io/${contact}`;
      break;
    case 'youtube':
      href = `https://www.youtube.com/channel/${contact}`;
      break;
    case 'soundcloud':
      href = `https://soundcloud.com/${contact}`;
      break;
    case 'medium':
      href = `https://medium.com/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;

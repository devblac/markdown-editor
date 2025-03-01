export const sanitizeMarkdown = (content) => {
    return content?.replace(/<script.*?>.*?<\/script>/gi, '') || '';
  };
const basePath = `${import.meta.env.BASE_URL.replace(/\/+$/, '')}/`;

export const withBasePath = (path = ''): string => `${basePath}${path.replace(/^\/+/, '')}`;

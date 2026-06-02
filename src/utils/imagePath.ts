export const resolveBasePathImage = (basePath: string, imagePath?: string,) => {
  if (!imagePath) {
    return undefined;
  }
  if (!imagePath.startsWith("/") || !basePath) {
    return imagePath;
  }

  return imagePath.startsWith(`${basePath}/`) ? imagePath : `${basePath}${imagePath}`;
};
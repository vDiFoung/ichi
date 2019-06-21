let baseURL = process.env.remoteServer;
export const express_api = {
  webLoginTraditionalUrl: `${baseURL}/api/handle-authenticate/web-login-traditional`,
  webRefreshTokenTraditionalUrl: `${baseURL}/api/handle-authenticate/web-refresh-token-traditional`,
  addUserUrl: `${baseURL}/api/user`,
  getAllProductsCategoryWithOrderUrl: `${baseURL}/api/products-taxonomies/getAllProductsCategoryWithOrder`,
  getAllProductsTagUrl: `${baseURL}/api/products-taxonomies/getAllProductsTag`,
  createProductsCategoryUrl: `${baseURL}/api/products-taxonomies/createProductsCategory`,
  uploadMediaUrl: `${baseURL}/api/media/upload-media`,
  getAllMediaUrl: `${baseURL}/api/media/get-all-media`,
  updateMediaUrl: `${baseURL}/api/media/update`,
  deleteMediaUrl: `${baseURL}/api/media/delete`,
  createProductUrl: `${baseURL}/api/products`,
};

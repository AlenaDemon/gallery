/* eslint-disable no-unused-vars */
export interface IPath {
  baseUrl: string;
  getImgUrl: (value: string) => string;
}

const path: IPath = {
  baseUrl: "https://test-front.framework.team/",
  getImgUrl: (i) => `${path.baseUrl}${i}`,
};

export default path;

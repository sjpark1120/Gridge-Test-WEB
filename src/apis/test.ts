import request from "./core";

export const getRequesterBusinessModelAll = <T>() => {
  // 유효성검사
  const url = `/requester/business-model/all`;
  return request.get<T>(url);
};

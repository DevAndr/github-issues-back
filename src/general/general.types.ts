type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ResponsePagination<T> = {
  pagination: Pagination;
  data?: Array<T>;
};

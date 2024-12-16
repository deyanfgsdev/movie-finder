export type SearchState = [string, (newSearch: string) => void];
export type FormErrorMessageState = [
  string | null,
  (newFormErrorMessage: string | null) => void,
];

export type StackKey = 'python' | 'java' | 'javascript' | 'datascience' | 'qa' | 'csharp';

interface VacancyTagItem {
  label: string;
}

const commonTags: VacancyTagItem[] = [
  { label: 'вакансии джуниор' },
  { label: 'как откликнуться на вакансию' },
  { label: 'примеры вакансий junior' },
];

const stackSpecificTags: Record<StackKey, VacancyTagItem[]> = {
  python: [
    { label: 'вакансии по Python' },
    { label: 'стажировки по Python' },
  ],
  java: [
    { label: 'вакансии по Java' },
    { label: 'стажировки по Java' },
  ],
  javascript: [
    { label: 'вакансии по JavaScript' },
    { label: 'стажировки по JavaScript' },
  ],
  datascience: [
    { label: 'вакансии по Data Science' },
    { label: 'стажировки по Data Science' },
  ],
  qa: [
    { label: 'вакансии по QA' },
    { label: 'стажировки по QA' },
  ],
  csharp: [
    { label: 'вакансии по C#' },
    { label: 'стажировки по C#' },
  ],
};

export const vacancyTagsDictionary: Record<StackKey, VacancyTagItem[]> = Object.fromEntries(
  (Object.keys(stackSpecificTags) as StackKey[]).map((stack) => [
    stack,
    [...commonTags, ...stackSpecificTags[stack]],
  ])
) as Record<StackKey, VacancyTagItem[]>;
export type StackKey = 'python' | 'java' | 'javascript' | 'datascience' | 'qa' | 'csharp';

interface TagItem {
  label: string;
}

const commonTags: TagItem[] = [
  { label: 'стажировка без опыта' },
  { label: 'вакансии джуниор' },
  { label: 'как откликнуться на вакансию' },
  { label: 'примеры вакансий junior' },
];

const stackSpecificTags: Record<StackKey, TagItem[]> = {
  python: [
    { label: 'стажировки по Python' },
    { label: 'Junior Python Developer' },
    { label: 'Вакансии Python без опыта' },
    { label: 'Python Django вакансии' },
  ],
  java: [
    { label: 'стажировки по Java' },
    { label: 'Junior Java Developer' },
    { label: 'Вакансии Java без опыта' },
    { label: 'Java Spring Boot вакансии' },
  ],
  javascript: [
    { label: 'стажировки по JavaScript' },
    { label: 'Junior JavaScript Developer' },
    { label: 'Вакансии JavaScript без опыта' },
    { label: 'JavaScript React, Angular, Vue вакансии' },
  ],
  datascience: [
    { label: 'стажировки по Data Science' },
    { label: 'Junior Data Scientist' },
    { label: 'Вакансии Data Science без опыта' },
    { label: 'Data Science ML вакансии' },
  ],
  qa: [
    { label: 'стажировки по QA' },
    { label: 'Junior QA Engineer' },
    { label: 'Вакансии QA без опыта' },
    { label: 'QA Automation вакансии' },
  ],
  csharp: [
    { label: 'стажировки по C#' },
    { label: 'Junior C# Developer' },
    { label: 'Вакансии C# без опыта' },
    { label: 'C# .NET вакансии' },
  ],
};

export const tagsDictionary: Record<StackKey, TagItem[]> = Object.fromEntries(
  (Object.keys(stackSpecificTags) as StackKey[]).map((stack) => [
    stack,
    [...commonTags, ...stackSpecificTags[stack]],
  ])
) as Record<StackKey, TagItem[]>;
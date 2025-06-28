export type StackKey = 'python' | 'java' | 'javascript' | 'datascience' | 'qa' | 'csharp';

interface InterviewTagItem {
  label: string;
}

const commonTags: InterviewTagItem[] = [
  { label: 'вопросы на собеседовании junior разработчик' },
  { label: 'технические вопросы фронтенд' },
  { label: 'вопросы в Яндекс собеседование' },
  { label: 'частые вопросы на собеседовании' },
];

// Третий тег зависит от стека
const stackTag: Record<StackKey, string> = {
  python: 'вопросы по Python на собеседовании',
  java: 'вопросы по Java на собеседовании',
  javascript: 'вопросы по JavaScript на собеседовании',
  datascience: 'вопросы по Data Science на собеседовании',
  qa: 'вопросы по QA на собеседовании',
  csharp: 'вопросы по C# на собеседовании',
};

// Четвертый тег — закольцованный стек (например, для js — sql, для python — java и т.д.)
const relatedStackTag: Record<StackKey, string> = {
  python: 'вопросы по Java для собеседования',
  java: 'вопросы по JavaScript для собеседования',
  javascript: 'вопросы по SQL для собеседования',
  datascience: 'вопросы по Python для собеседования',
  qa: 'вопросы по Data Science для собеседования',
  csharp: 'вопросы по QA для собеседования',
};

export const interviewTagsDictionary: Record<StackKey, InterviewTagItem[]> = (Object.keys(stackTag) as StackKey[]).reduce(
  (acc, stack) => {
    acc[stack] = [
      ...commonTags.slice(0, 2),
      { label: stackTag[stack] },
      { label: relatedStackTag[stack] },
      ...commonTags.slice(2),
    ];
    return acc;
  },
  {} as Record<StackKey, InterviewTagItem[]>
);
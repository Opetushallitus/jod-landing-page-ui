import { Accordion } from '@jod/design-system';

export const ArticleAccordion = ({ titleText, content }: { titleText: string; content: React.ReactNode }) => {
  return (
    <Accordion title={titleText} initialState={false} className="bg-bg-gray-2 p-3" ellipsis={false} caretPosition="top">
      <div className="px-5 pt-5 pb-3 sm:pt-3 [&_p]:mt-6 [&_p]:first:mt-0 sm:[&_p]:mt-5">{content}</div>
    </Accordion>
  );
};

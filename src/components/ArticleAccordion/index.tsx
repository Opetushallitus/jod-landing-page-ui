import { Accordion } from '@jod/design-system';

export const ArticleAccordion = ({ titleText, content }: { titleText: string; content: React.ReactNode }) => {
  return (
    <Accordion title={titleText} initialState={false} className="bg-bg-gray-2 p-3" ellipsis={false} caretPosition="top">
      <div className="px-5 pb-3">{content}</div>
    </Accordion>
  );
};

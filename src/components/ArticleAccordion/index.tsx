import { Accordion } from '@jod/design-system';
import { useTranslation } from 'react-i18next';

export const ArticleAccordion = ({ titleText, content }: { titleText: string; content: React.ReactNode }) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <Accordion title={titleText} lang={language} initialState={false} className="bg-bg-gray-2 p-3">
      <div className="px-5 pb-3">{content}</div>
    </Accordion>
  );
};

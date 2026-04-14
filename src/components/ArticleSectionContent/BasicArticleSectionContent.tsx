export const BasicArticleSectionContent = ({
  text,
  onlyText = true,
}: {
  text: React.ReactNode;
  onlyText?: boolean;
}) => {
  return onlyText ? <p className="mb-4 last:mb-0">{text}</p> : text;
};

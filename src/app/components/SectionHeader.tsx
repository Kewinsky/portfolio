import { newsreader } from "../fonts";

interface SectionHeaderProps {
  header: string;
}

const SectionHeader = ({ header }: SectionHeaderProps) => {
  return <h2 className={`text-6xl ${newsreader.className}`}>{header}</h2>;
};

export default SectionHeader;

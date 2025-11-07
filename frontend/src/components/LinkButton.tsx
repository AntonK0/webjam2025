import { RiLinksLine } from "@remixicon/react";

interface LinkButtonProps {
  url: string;
}

const LinkButton = ({ url }: LinkButtonProps) => {
  return <a className="w-8" href={url}><RiLinksLine color="blue" /></a>;
};

export default LinkButton;

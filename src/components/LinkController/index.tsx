import Link from "next/link";
import { useRouter } from "next/router";

type LinkControllerProps = {
  href: string;
  label: string;
};

export const LinkController: React.FC<LinkControllerProps> = ({
  href,
  label,
}) => {
  const router = useRouter();
  return (
    <Link href={href} passHref>
      <a className={router.pathname === href ? "link_active" : ""}>{label}</a>
    </Link>
  );
};

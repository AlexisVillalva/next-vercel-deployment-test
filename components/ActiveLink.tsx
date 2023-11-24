import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
};

interface Props {
  // children: React.ReactNode;
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ text, href }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

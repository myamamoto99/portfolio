import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/home",
      permanent: false,
    },
  };
};

export default function IndexPage() {
  return null;
}

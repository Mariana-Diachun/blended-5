import { useGetCommentsQuery } from "../redux/commentApi";

import { Comments, Hero, Loader, Section } from "../components";

export const Home = () => {
  const { isLoading, isSuccess } = useGetCommentsQuery();

  return (
    <Section>
      {isLoading && <Loader />}
      {isSuccess && (
        <>
          <Hero
            title="What people are saying."
            subtitle="Feedback from our customers."
          />
          <Comments />
        </>
      )}
    </Section>
  );
};

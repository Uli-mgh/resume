import { Experience } from "../typings";

export const getExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchExperience`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  console.log("FETCH experiences ", experiences);

  return experiences;
};

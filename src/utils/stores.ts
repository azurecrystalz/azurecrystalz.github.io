import { persistentMap } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";
import { map } from "nanostores";

export const DEFAULT_STORY_OPTIONS = {
    ushio__18TRIP__firstName: "Kaede",
    ushio__18TRIP__lastName: "Hamasaki",
    ushio__18TRIP__gender: "male",
};
export const $storyOptions = persistentMap(
    "ushio__storyOptions",
    DEFAULT_STORY_OPTIONS
);

export const useStoryOptions = (key: keyof StoryOptions) => {
    const storyOptions = useStore($storyOptions);
    if (storyOptions[key]) return storyOptions[key];
    return DEFAULT_STORY_OPTIONS[key];
};

export const setStoryOptions = $storyOptions.setKey;

import type { User } from "../types/UserType.ts";
import { transformNameText } from "./transformNameText.ts";

/**
 *
 * @param users
 * @returns users with transformed name text
 */
export const getSearchOptions = (users: User[]) => {
  if (users.length > 0) {
    const withUpdatedNames = users.map((user, _) => ({
      ...user,
      name: transformNameText(user.name),
    }));
    return withUpdatedNames.sort((userA, userB) =>
      (userA.name.split(", ").at(0) ?? "").localeCompare(
        userB.name.split(", ").at(0) ?? "",
      ),
    );
  } else return [];
};
